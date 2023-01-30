<script lang="ts">
  import Form from "./components/Form.svelte";
  import { scale, fade } from "svelte/transition";
  import UserList from "./components/UserList.svelte";
  import getUserCountApi from "./components/getUserCountApi";

  let error;
  let success;
  const handleWarningMsg = (event) => {
    error = event.detail.message;
  };
  const handleFormSubmit = (event) => {
    const data = event.detail.userInfo;
    fetch(import.meta.env.VITE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    }).then((res) => {
      if (res.ok) {
        getUserCountApi();
        success = "Thank you, you will be notified ;)";
      } else {
        error = "Something went wrong!";
      }
    });
  };
</script>

<main>
  <div class="container">
    <h1>JOIN US</h1>
    <UserList />
    <Form on:errorMsg={handleWarningMsg} on:userInfo={handleFormSubmit} />
    {#if error}
      <div in:scale out:fade class="error">
        {error}
      </div>
    {/if}
    {#if success}
      <div in:scale out:fade class="success">
        {success}
      </div>
    {/if}
  </div>
</main>

<style>
  .container {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    font-size: 26px;
    padding-top: 180px;
  }
  h1 {
    margin: 0;
    font-size: 200px;
    line-height: 150px;
    font-weight: 100;
  }
  .error {
    font-size: 16px;
    margin-top: 20px;
    color: crimson;
    letter-spacing: 3px;
  }
  .success {
    font-size: 16px;
    margin-top: 20px;
    color: greenyellow;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    letter-spacing: 4px;
  }
</style>

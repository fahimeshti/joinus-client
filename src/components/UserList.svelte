<script>
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";
    import getUserCountApi from "./getUserCountApi";
    import { userCountStore } from "./store";

    let userCount;
    onMount(async () => {
        getUserCountApi();
    });
    userCountStore.subscribe((prevCount) => (userCount = prevCount));
    console.log(userCount);
</script>

<div>
    <p>
        Enter your email to join
        {#if userCount}
            <span in:scale>6{userCount}</span>
        {/if}
        others on our waitlist. We are 100% not a cult.
    </p>
</div>

<style>
    p {
        color: #bbb;
        font-weight: 300;
        font-size: 22px;
        margin-top: 0;
    }
    span {
        font-weight: 600;
        color: #fff !important;
    }
</style>

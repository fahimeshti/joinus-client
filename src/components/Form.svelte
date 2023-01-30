<script>
    import { createEventDispatcher } from "svelte";
    import { v4 as uuidv4 } from "uuid";
    import Button from "./Button.svelte";

    const dispatch = createEventDispatcher();

    let email = "";
    let emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let btnDisabled = true;
    let inputDisabled = false;
    $: validEmail = emailRegex.test(email);

    const handleInput = () => {
        if (!validEmail) {
            dispatch("errorMsg", {
                message: `Please enter a valid email`,
            });
            btnDisabled = true;
        } else {
            dispatch("errorMsg", {
                message: null,
            });
            btnDisabled = false;
        }
    };

    const handleSubmit = (event) => {
        if (validEmail) {
            const userInfo = {
                id: uuidv4(),
                email,
            };
            dispatch("userInfo", {
                userInfo: userInfo,
            });
            event.target.reset();
            btnDisabled = true;
            inputDisabled = true;
        }
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input
        disabled={inputDisabled}
        type="text"
        bind:value={email}
        on:input={handleInput}
        name="email"
        placeholder="Enter Your Email"
    />
    <Button disabled={btnDisabled} type="submit">Join Now</Button>
</form>

<style>
    input {
        border: none;
        border-bottom: 1px solid #fff;
        background: transparent;
        font-weight: 500;
        outline: none !important;
        transition: 0.4s all;
    }
    input:focus {
        background: rgba(255, 255, 255, 0.04);
    }
    input {
        padding: 10px 15px;
        color: #fff !important;
        outline: none;
        font-size: 16px;
        transition: all 0.3s;
    }
    input::placeholder {
        color: #eee;
    }
</style>

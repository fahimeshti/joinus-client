<script>
    export let type = "button";
    export let disabled = false;
</script>

<button {type} {disabled}>
    <slot />
</button>

<style>
    button {
        background: #fff;
        color: #222 !important;
        cursor: pointer;
        font-weight: 600;
        border-radius: 0 4px 4px 0;
        margin-left: -2px;
        padding: 10px 15px;
        outline: none;
        font-size: 16px;
        transition: all 0.3s;
        border: 1px solid #fff !important;
    }
    button:hover {
        background: transparent;
        color: #fff !important;
    }
    button:disabled {
        background: #444;
        color: #ccc !important;
        cursor: not-allowed;
        border: 2px solid #444 !important;
    }
</style>

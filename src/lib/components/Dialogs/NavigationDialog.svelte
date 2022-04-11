<script lang="ts">
    import { fade, slide } from "svelte/transition";
    export let onClose: any;
</script>

<div
    class="bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 flex justify-center"
    transition:fade={{ duration: 300 }}
>
    <div
        class="h-56 w-96 bg-primary-dark-90 absolute top-64"
        transition:slide={{ duration: 200 }}
    >
        <div />
        <div class="h-full w-full flex justify-center items-center flex-col">
            <i on:click={onClose} class="bg-slate-200 w-6 h-6" />
            <h5>Search your webpage</h5>
            <input
                type="text"
                class="w-4/5 h-12 pl-4 rounded-lg shadow-xl border-primary-dark-10 border-solid border-2 bg-primary-dark-90 text-white"
            />
        </div>
    </div>
</div>

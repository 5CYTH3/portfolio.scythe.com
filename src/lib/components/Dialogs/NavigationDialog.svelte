<script lang="ts">
    import { fade, slide } from 'svelte/transition';
    export let onClose: any;
</script>

<div
    class="bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 flex justify-center"
    transition:fade={{ duration: 300 }}
>
    <div
        class="h-56 w-96 bg-primary-dark-90 absolute top-64 rounded-xl bg-opacity-75 backdrop-blur-sm shadow-inner"
        transition:slide={{ duration: 200 }}
    >
        <div>
            <div class="h-8 flex justify-end items-center">
                <svg
                    width="24"
                    height="24"
                    on:click={onClose}
                    class="mr-2 mt-2 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="dark:fill-white"
                        d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                    />
                </svg>
            </div>
        </div>
        <div class="w-full flex justify-center items-center flex-col mt-8">
            <div class="w-72 flex flex-col">
                <label for="search" class="text-white"
                    >Search your webpage</label
                >
                <input
                    name="search"
                    type="text"
                    class="mt-2 w-full h-12 pl-4 rounded-lg shadow-xl border-primary-dark-60 border border-solid bg-primary-dark-90 text-white"
                />
            </div>
        </div>
    </div>
</div>

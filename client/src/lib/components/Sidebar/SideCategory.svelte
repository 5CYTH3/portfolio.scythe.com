<script lang="ts">
    import { dark } from '$lib/functions/store';

    let isOpen: boolean = true;
</script>

<!--
@component
Already-styled categories component. It wrap the slots for SideFile and Button. 
-->

<div>
    <div
        on:click={() => (isOpen = !isOpen)}
        class="flex flex-row cursor-pointer select-none"
    >
        {#if isOpen}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                    fill={$dark ? '#FFFFFF' : '#2E3A59'}
                />
            </svg>
        {:else}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z"
                    fill={$dark ? '#FFFFFF' : '#2E3A59'}
                />
            </svg>
        {/if}
        <h5 class="dark:text-white">Recents</h5>
    </div>
    <div class={isOpen ? 'block' : 'hidden'}>
        <slot />
    </div>
</div>

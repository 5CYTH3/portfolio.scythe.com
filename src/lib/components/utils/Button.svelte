<script lang="ts">
import { get_slot_changes } from "svelte/internal";


    export let onClick;
    export let width = 'w-48';
    export let height = 'h-16';
</script>

<button on:click={onClick} class="dark:border dark:bg-primary-dark-100 {width} {height} dark:border-primary-dark-10">
    <slot />
</button>
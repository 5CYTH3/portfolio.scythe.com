<script lang="ts">
    export let onClick: any;
    export let width: string = 'w-36';
    export let height: string = 'h-16';
</script>

<button
    on:click={onClick}
    class="dark:border dark:bg-primary-dark-100 {width} {height} dark:border-primary-dark-10"
>
    <slot />
</button>

<script lang="ts">
    export let dark: string = 'text-white';
    export let light: string = 'text-black';
    export let ext: string = '';
</script>

<p class="dark:{dark} {light} {ext} select-none">
    <slot/>
</p>
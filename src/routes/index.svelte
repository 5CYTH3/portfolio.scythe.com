<script>
    import { title } from "$lib/functions/store";

    import { onMount } from "svelte";
    onMount(() => {
        title.set("Explorer");
    });
</script>

<section class="w-full h-full" />

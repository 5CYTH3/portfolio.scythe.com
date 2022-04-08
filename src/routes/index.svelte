<script>
    import { title } from "$lib/functions/store";

    import { onMount } from "svelte";
    onMount(() => {
        title.set("Explorer");
    });
</script>


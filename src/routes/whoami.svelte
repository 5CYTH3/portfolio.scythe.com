<script>
    import { title } from "$lib/functions/store";
    import { onMount } from "svelte";

    onMount(() => {
        title.set("Who am I?");
    });
</script>

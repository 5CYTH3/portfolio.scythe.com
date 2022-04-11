<script lang="ts">
    import SideHierarchy from "$lib/components/Sidebar/SideHierarchy.svelte";
    import SideCategory from "$lib/components/Sidebar/SideCategory.svelte";
    import SideFile from "$lib/components/Sidebar/SideFile.svelte";
    export let ifIsHidden;
</script>

<SideHierarchy class="shrink-0 hidden {ifIsHidden}">
    <SideCategory>
        <SideFile name="README.md" />
        <SideFile name="main.go" />
    </SideCategory>
</SideHierarchy>

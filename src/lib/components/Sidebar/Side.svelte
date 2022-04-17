<script lang="ts">
    import { dark } from '$lib/functions/store';
    import SideHierarchy from '$lib/components/Sidebar/SideHierarchy.svelte';
    import SideCategory from '$lib/components/Sidebar/SideCategory.svelte';
    import SideFile from '$lib/components/Sidebar/SideFile.svelte';
    import Button from '../utils/Button.svelte';
    export let ifIsHidden;
</script>

<!--
@component
Main component of Sidebar. It groups all the components related to the side bar, including categories, files, etc.
-->

<SideHierarchy class="shrink-0 hidden {ifIsHidden}">
    <SideCategory>
        <SideFile name="README.md" />
        <SideFile name="main.go" />
    </SideCategory>
    <SideCategory>
        <Button onClick={() => ($dark = !$dark)}
            >{$dark ? 'Light!' : 'Dark!'}</Button
        >
    </SideCategory>
</SideHierarchy>

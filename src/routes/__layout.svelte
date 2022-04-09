<script lang="ts">
    import "../app.css";
    import { dark, path, title } from "$lib/functions/store";
    import Navbar from "$lib/components/Navbar/Navbar.svelte";
    import NavbarTitle from "$lib/components/Navbar/NavbarTitle.svelte";
    import SideHierarchy from "$lib/components/Sidebar/SideHierarchy.svelte";
    import SideCategory from "$lib/components/Sidebar/SideCategory.svelte";
    import SideFile from "$lib/components/Sidebar/SideFile.svelte";

    let darkVar: boolean;
    let titleVar: string;
    let pathVar: string;
    let isHidden: boolean = true;

    dark.subscribe((val) => (darkVar = val));
    title.subscribe((val) => (titleVar = val));
    path.subscribe((val) => (pathVar = val));
</script>

<main class="h-screen md:overflow-hidden {darkVar ? 'dark' : ''}">
    <Navbar>
        <NavbarTitle
            content={titleVar}
            slot="title"
            on:click={() => (isHidden = !isHidden)}
        />
        <h3 slot="path" class="text-primary-dark-10">{pathVar}</h3>
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </Navbar>
    <div class="h-full flex flex-row {isHidden ? 'hidden' : ''}">
        <SideHierarchy>
            <SideCategory>
                <SideFile />
            </SideCategory>
        </SideHierarchy>
        <slot />
    </div>
</main>

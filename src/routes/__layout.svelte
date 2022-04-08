<script lang="ts">
    import "../app.css";
    import { dark, path, title } from "$lib/functions/store";
    import Navbar from "$lib/components/Navbar/Navbar.svelte";
    import NavbarTitle from "$lib/components/Navbar/NavbarTitle.svelte";
    import SideHierarchy from "$lib/components/Sidebar/SideHierarchy.svelte";

    let darkVar: boolean;
    let titleVar: string;
    let pathVar: string;
    let isShown: boolean = true;

    dark.subscribe((val) => (darkVar = val));
    title.subscribe((val) => (titleVar = val));
    path.subscribe((val) => (pathVar = val));
</script>

<svelte:body class="max-h-screen"></svelte:body>

<main class="h-screen lg:overflow-hidden {darkVar ? "dark" : ""}">
    <Navbar>
        <NavbarTitle content={titleVar} slot="title" on:click={ () => isShown = !isShown } />
        <h3 slot="path" class="text-primary-dark-10">{pathVar}</h3>
    </Navbar>
    <div class="h-full {isShown ? "md:flex absolute" : "hidden"}">
        <SideHierarchy>
            
        </SideHierarchy>
        <slot />
    </div>
</main>

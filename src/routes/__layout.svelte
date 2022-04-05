<script lang="ts">
    import "../app.css";
    import { dark, path, title } from "$lib/functions/store";
    import Navbar from "$lib/components/Navbar/Navbar.svelte";
    import NavbarTitle from "$lib/components/Navbar/NavbarTitle.svelte";

    let darkVar: boolean;
    let titleVar: string;
    let pathVar: string;

    dark.subscribe((val) => (darkVar = val));
    title.subscribe((val) => (titleVar = val));
    path.subscribe((val) => (pathVar = val));
</script>

<main class={darkVar ? "dark" : ""}>
    <Navbar>
        <NavbarTitle content={titleVar} slot="title" />
        <h3 slot="path">{pathVar}</h3>
    </Navbar>
    <slot />
</main>

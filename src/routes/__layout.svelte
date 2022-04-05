<script lang="ts">
    import "../app.css";
    import { dark, title } from "$lib/functions/store";
    import Navbar from "$lib/components/Navbar/Navbar.svelte";
    import NavbarTitle from "$lib/components/Navbar/NavbarTitle.svelte";

    let darkVar: boolean;
    let titleVar: string;
    let pathVar: string;

    dark.subscribe((val) => (darkVar = val));
    title.subscribe((val) => (titleVar = val));
</script>

<main class={darkVar ? "dark" : ""}>
    <Navbar>
        <NavbarTitle content={titleVar} slot="title" />
    </Navbar>
    <slot />
</main>

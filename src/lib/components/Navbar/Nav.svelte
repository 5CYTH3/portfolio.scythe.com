<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import NavbarTitle from "./NavbarTitle.svelte";
    import { path, title } from "$lib/functions/store";
    export let onClickingEvent;
</script>

<Navbar>
    <NavbarTitle
        content={$title}
        slot="title"
        on:click={onClickingEvent}
    />
    <h3 slot="path" class="text-primary-dark-10">{$path}</h3>
    <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
    </div>
</Navbar>

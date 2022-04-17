<script lang="ts">
    import Navbar from './Navbar.svelte';
    import NavbarTitle from './NavbarTitle.svelte';
    import { path, title } from '$lib/functions/store';
    import Text from '../utils/Text.svelte';
    export let onClickingEvent;
</script>

<!--
@component
Main component of Navbar. It groups all the components related to navigation.
-->

<Navbar>
    <NavbarTitle content={$title} slot="title" on:click={onClickingEvent} />
    <Text dark="text-primary-dark-10" slot="path">{$path}</Text>
    <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
    </div>
</Navbar>

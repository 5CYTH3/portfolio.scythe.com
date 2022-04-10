<script lang="ts">
    import "../app.css";
    import { dark, path, title } from "$lib/functions/store";
    import Navbar from "$lib/components/Navbar/Navbar.svelte";
    import NavbarTitle from "$lib/components/Navbar/NavbarTitle.svelte";
    import SideHierarchy from "$lib/components/Sidebar/SideHierarchy.svelte";
    import SideCategory from "$lib/components/Sidebar/SideCategory.svelte";
    import SideFile from "$lib/components/Sidebar/SideFile.svelte";
    import { onMount } from "svelte";

    let isHidden: boolean = true;

    onMount(() => {
        document.addEventListener("keydown", (e) => {
            let key = e.key;
            let isCtrlPressed = e.ctrlKey;

            if (key === "k" && isCtrlPressed) {
                alert("Ctrl + k");
            } else if (key == "Control") {
                e.preventDefault();
            }
        });
    });
</script>

<main class="sm:h-screen {$dark ? 'dark' : ''}">
    <Navbar>
        <NavbarTitle
            content={$title}
            slot="title"
            on:click={() => (isHidden = !isHidden)}
        />
        <h3 slot="path" class="text-primary-dark-10">{$path}</h3>
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </Navbar>
    <div class="h-full flex-row flex md:max-h-[93vh]">
        <SideHierarchy
            class="{isHidden ? 'hidden' : 'md:block'} shrink-0 hidden"
        >
            <SideCategory>
                <SideFile name="README.md" />
                <SideFile name="main.go" />
            </SideCategory>
        </SideHierarchy>
        <slot />
    </div>
</main>

<script lang="ts">
    import '../app.css';

    import { dark } from '$lib/functions/store';
    import { onMount } from 'svelte';

    import Side from '$lib/components/Sidebar/Side.svelte';
    import NavigationDialog from '$lib/components/Dialogs/NavigationDialog.svelte';
    import Nav from '$lib/components/Navbar/Nav.svelte';

    let routes = ['projects', 'whoami', 'b_chain', 'skills'];
    let isHidden: boolean = true;
    let isNavigationDialogShown: boolean = false;

    onMount(() => {
        document.addEventListener('keydown', (e) => {
            let key = e.key;
            let isCtrlPressed = e.ctrlKey;

            if (key === 'y' && isCtrlPressed) {
                isNavigationDialogShown = !isNavigationDialogShown;
            } else if (key == 'Control') {
                e.preventDefault();
            }

            if (isNavigationDialogShown && e.key == 'Escape') {
                isNavigationDialogShown = !isNavigationDialogShown;
            }
        });
    });
</script>

<main class="sm:h-screen {$dark ? 'dark' : ''}">
    {#if isNavigationDialogShown}
        <NavigationDialog
            onClose={() => (isNavigationDialogShown = false)}
            {routes}
        />
    {/if}
    <Nav onClickingEvent={() => (isHidden = !isHidden)} />
    <div class="h-full flex-row flex md:max-h-[93vh]">
        <Side ifIsHidden={isHidden ? 'hidden' : 'md:block'} />
        <slot />
    </div>
</main>

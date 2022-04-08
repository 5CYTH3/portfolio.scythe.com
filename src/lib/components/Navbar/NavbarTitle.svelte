<script lang="ts">
    export let content: string;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    const click = () => dispatch('click');

</script>

<h4 class="text-white ml-4 hover:cursor-pointer select-none" on:click={click}>{content}</h4>

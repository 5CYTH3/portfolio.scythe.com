<script lang="ts">
    import { dark } from '$lib/functions/store';
    import { createEventDispatcher } from 'svelte';
    import Text from '../utils/Text.svelte';
    export let content: string;

    const dispatch = createEventDispatcher();

    const click = () => dispatch('click');
</script>

<!--
@component
Title of the Navbar, with all state management (on:click).
-->

<div on:click={click} class="flex ml-4 hover:cursor-pointer">
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18 20.0001H3C2.73459 20.0027 2.47935 19.898 2.29233 19.7097C2.10531 19.5214 2.0024 19.2654 2.007 19H2V5C2 3.89543 2.89543 3 4 3H10C10.2234 3.00021 10.4402 3.0752 10.616 3.213L12.9 5H18C19.1046 5 20 5.89543 20 7V11H21C21.3361 11 21.6498 11.169 21.8348 11.4496C22.0198 11.7302 22.0514 12.0851 21.919 12.394L18.919 19.394C18.7614 19.7616 18.4 20.0001 18 20.0001ZM6.66 13L4.517 18H17.341L19.484 13H6.66ZM4 7V14.13L5.081 11.606C5.23858 11.2384 5.60004 11 6 11H18V7H4Z"
            fill={$dark ? '#FFFFFF' : '#2E3A59'}
        />
    </svg>
    <Text ext="ml-2">{content}</Text>
</div>

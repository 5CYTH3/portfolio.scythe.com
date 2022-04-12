<script lang="ts">
    import { dark } from '$lib/functions/store';

    export let data: string;
</script>

<a
    class="transition-all dark:bg-primary-dark-100 flex flex-col items-center justify-center p-4 max-w-[11rem] min-w-[11rem] rounded-xl hover:shadow-md shadow-primary-dark-10"
    href="/{data}"
>
    <svg
        width="144"
        height="144"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4Z"
            fill={$dark ? '#ADADAD' : '#2E3A59'}
        />
    </svg>
    <h5 class="dark:text-white text-black">{data}</h5>
</a>

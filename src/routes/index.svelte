<script>
    import Directory from "$lib/components/Index/Directory.svelte";
    import { title } from "$lib/functions/store";
    title.set("Explorer");

    let routes = ["projects", "whoami", "b_chain", "skills"];
</script>

<section
    class="w-full h-full dark:bg-primary-dark-100 flex justify-center items-center p-4"
>
    <div
        class="rounded-lg dark:bg-primary-dark-90 border-2 border-primary-dark-60 w-full h-full p-8 flex sm:sm:flex justify-center sm:justify-start sm:items-start"
    >
        <div
            class="grid gap-12 w-fit
            lg:grid-cols-4s lg:grid-rows-1s
            md:grid-cols-3s md:grid-rows-2s
            sm:grid-cols-2s
            grid-cols-1s grid-rows-4s"
        >
            {#each routes as route}
                <Directory data={route} />
            {/each}
        </div>
    </div>
</section>

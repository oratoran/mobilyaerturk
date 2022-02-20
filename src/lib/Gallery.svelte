<script>
    export let images;
    import baguetteBox from 'baguettebox.js';
    import { onMount } from 'svelte';

    onMount(async () => {
        baguetteBox.run('.gallery');
    });  
</script>


<div class="gallery md:columns-3 gap-8 px-3 mb-10 md:w-[1440px] mx-auto">
    {#each images as image}
        <a href="/{image}" data-caption="Ertürk Mobilya">
            <img src="/{image}" alt="" class="w-full h-full aspect-auto py-4 rounded-3xl">
        </a>
    {/each}
</div>

<style>
    @import 'baguettebox.js/dist/baguetteBox.min.css';
</style>
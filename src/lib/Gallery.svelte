<script>
    export let images;
    import baguetteBox from 'baguettebox.js';
    import { onMount } from 'svelte';

    onMount(async () => {
        baguetteBox.run('.gallery');
    });  
</script>

<div class="flex flex-wrap justify-start items-center md:max-w-[1440px] mb-10 mx-auto gallery">
    {#each images as image}
        <a href="/{image}" data-caption="Ertürk Mobilya" class="w-1/3">
            <img src="/{image}" alt="" class=" p-4 rounded-3xl">
        </a>
    {/each}
  </div>

<style>
    @import 'baguettebox.js/dist/baguetteBox.min.css';
</style>
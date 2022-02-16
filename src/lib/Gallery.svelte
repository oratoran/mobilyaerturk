<script>
    export let images;
</script>

<div class="masonry before:box-inherit after:box-inherit">
    {#each images as image}
    <div class="break-inside p-8 my-6 bg-gray-100 rounded-lg">
        <img src="/{image}" alt="">
    </div>
    {/each}
</div>

<style>
    
</style>
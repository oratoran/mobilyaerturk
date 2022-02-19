<script>
    export let images;
</script>

<div class="lg:masonry before:box-inherit after:box-inherit">
    {#each images as image}
    <div class="break-inside p-8 my-6  rounded-lg">
        <img src="/{image}" alt="">
    </div>
    {/each}
</div>
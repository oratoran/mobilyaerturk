<script>
    export let title = 'Default Title';
    export let subtitle = 'Default Subtitle';
    export let coverImage = 'proje1.png';
</script>

<div class="justify-center flex-col px-3 md:w-[1440px] mx-auto py-16">
    <h1 class="text-center mt-2 text-3xl font-serif">{title}</h1>
    <h2 class="text-center mt-2 text-2xl font-serif pb-16">{subtitle}</h2>
    <img src="/{coverImage}" alt="" class="rounded-xl shadow-xl md:w-1/2 mx-auto">
</div>


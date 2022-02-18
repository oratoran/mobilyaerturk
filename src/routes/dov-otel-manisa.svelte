<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_1.jpeg',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_2.jpeg',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_3.png',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_4.png',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_6.png',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_7.png',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_8.png',
        'dov-otel-manisa/dov_otel_manisa_mobilya_erturk_9.png',
    
    ];
    let title = 'Dov Hotel';
    let subtitle = 'Manisa';
    let coverImage ='dov-otel-manisa/dov_otel_manisa_mobilya_erturk_5.png'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
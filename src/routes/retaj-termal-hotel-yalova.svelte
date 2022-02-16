<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-3.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-17.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-21.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-22.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-25.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-32.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-38.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-40.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-41.jpeg',
        'retaj-termal-hotel-yalova/retaj-thermal-hotel-43.jpeg',
    ];

    let title = 'Retaj Termal Hotel';
    let subtitle = 'Yalova';
    let coverImage = 'retaj.jpeg';
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{title} proje sayfaı">
</svelte:head>
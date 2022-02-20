<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'salon-selay-dugun-salonu-icerenkoy/salon-selay-dugun-salonu-1.jpeg',
        'salon-selay-dugun-salonu-icerenkoy/salon-selay-dugun-salonu-2.jpeg',
        'salon-selay-dugun-salonu-icerenkoy/salon-selay-dugun-salonu-3.jpeg',
    ];

    let title = 'Salon Selay / Düğün Salonu';
    let subtitle = 'İçerenköy';
    let coverImage ='salon_serenay_erturk_mobilya.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_2.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_3.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_4.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_5.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_6.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_7.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_8.jpeg',
        'sisli-vizon-hotel-sisli/sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya_9.jpeg',
    ];
    let title = 'Vizon Hotel';
    let subtitle = 'Şişli';
    let coverImage ='sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
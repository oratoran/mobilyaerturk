<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'grand-korfez-hotel-gebze/grand_korfez_hotel_izmit_erturk_mobilya_1.jpeg',
        'grand-korfez-hotel-gebze/grand_korfez_hotel_izmit_erturk_mobilya_6.jpeg',
        'grand-korfez-hotel-gebze/grand_korfez_hotel_izmit_erturk_mobilya_3.jpeg',
        'grand-korfez-hotel-gebze/grand_korfez_hotel_izmit_erturk_mobilya_5.jpeg',
        'grand-korfez-hotel-gebze/grand_korfez_hotel_izmit_erturk_mobilya_2.jpeg',

    ];
    let title = 'Grand Körfez Hotel';
    let subtitle = 'Gebze';
    let coverImage ='grand-korfez-hotel-gebze/grand_korfez_hotel_gebze_4.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
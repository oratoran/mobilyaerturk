<script>
    import Galery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_2.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_3.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_4.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_5.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_6.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_7.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_8.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_9.jpeg',
        'lamec-hotel-gebze/Lamec_hotel_gebze_mobilya_erturk_10.jpeg',
    ];
    let title = 'Lamec Hotel';
    let subtitle = 'Gebze';
    let coverImage = 'lamec.jpeg';
</script>



<Title {title} {subtitle} {coverImage}/>

<Galery {images}/>

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>


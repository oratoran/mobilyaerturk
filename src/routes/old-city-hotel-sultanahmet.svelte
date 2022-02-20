<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_1.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_2.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_3.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_4.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_5.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_6.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_7.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_8.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_9.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_10.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_11.jpeg',
        'old-city-hotel-sultanahmet/old_city_hotel_sultanahmet_istanbul_mobilya_erturk_12.jpeg'
    ];
    let title = 'Old City Hotel Sultanahmet';
    let subtitle = 'İstanbul';
    let coverImage ='old_city_hotel_sultanahmet_istanbul_mobilya_erturk.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
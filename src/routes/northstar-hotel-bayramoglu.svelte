<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'northstar-hotel-bayramoglu/northstar-hotel-bayramoglu_erturk_mobilya_2.jpeg',
        'northstar-hotel-bayramoglu/northstar-hotel-bayramoglu_erturk_mobilya_3.jpeg',
        'northstar-hotel-bayramoglu/northstar-hotel-bayramoglu_erturk_mobilya_4.jpeg',
        'northstar-hotel-bayramoglu/northstar-hotel-bayramoglu_erturk_mobilya_5.jpeg',
        'northstar-hotel-bayramoglu/northstar-hotel-bayramoglu_erturk_mobilya_6.jpeg',


    ];
    let title = 'Northstar Hotel';
    let subtitle = 'Bayramoğlu';
    let coverImage ='northstar-hotel-bayramoglu/north-star-resort-hotel-bayramoglu.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
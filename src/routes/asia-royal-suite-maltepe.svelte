<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'asia-royal-suite-maltepe/asia_royal_suite_maltepe_mobilya_erturk_2.jpeg',
        'asia-royal-suite-maltepe/asia_royal_suite_maltepe_mobilya_erturk_3.jpeg',
        'asia-royal-suite-maltepe/asia_royal_suite_maltepe_mobilya_erturk_4.jpeg',
        'asia-royal-suite-maltepe/asia_royal_suite_maltepe_mobilya_erturk_5.jpeg'
    ];
    let title = 'Asia Royal Suite Hotel';
    let subtitle = 'Maltepe';
    let coverImage ='asia_royal_suite_maltepe_mobilya_erturk.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
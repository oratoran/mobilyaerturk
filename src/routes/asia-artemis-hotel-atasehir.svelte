<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'asia-artemis/asia_artemis_suite_mobilya_erturk_2.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_3.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_4.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_5.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_6.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_7.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_8.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_9.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_10.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_11.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_12.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_13.jpeg',
        'asia-artemis/asia_artemis_suite_mobilya_erturk_14.jpeg'
    ];
    let title = 'Asia Artemis Hotel';
    let subtitle = 'Ataşehir';
    let coverImage = 'asia-artemis/asia_artemis_suite_mobilya_erturk_1.jpeg';
</script>

<Title {title} {subtitle} {coverImage} />

<Gallery {images} />

<svelte:head>
    <title>{title} Mobilya ve Dekorasyon - Ertürk Mobilya </title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>

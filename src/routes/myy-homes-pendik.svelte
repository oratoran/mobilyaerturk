<script>
    import Gallery from '$lib/Gallery.svelte';
    import Title from '$lib/PortfolioTitle.svelte';

    let images = [
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_2.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_3.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_4.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_5.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_6.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_7.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_8.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_9.jpeg',
        'myy-homes-pendik/myy_homes_pendik_mobilya_erturk_10.jpeg',
    ];
    let title = 'MYY Homes Hotel';
    let subtitle = 'Pendik';
    let coverImage ='myy-homes-pendik/myy_homes_pendik_mobilya_erturk_1.jpeg'
</script>

<Title {title} {subtitle} {coverImage}/>

<Gallery {images} />

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{title} proje sayfası">
</svelte:head>
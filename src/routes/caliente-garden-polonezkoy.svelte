<script>
        import Gallery from '$lib/Gallery.svelte';
        import Title from '$lib/PortfolioTitle.svelte';

        let images = [
            'caliente-garden-polonezkoy/caliente_garden_polonezkoy_mobilya_erturk_1.jpeg',
            'caliente-garden-polonezkoy/caliente_garden_polonezkoy_mobilya_erturk_2.jpeg',
        ];
        let title = 'Caliente Garden Hotel';
        let subtitle = 'Polonezköy';
        let coverImage = 'caliente-garden-polonezkoy/caliente_garden_polonezkoy_mobilya_erturk_3.jpeg'
    </script>

    <Title {title} {subtitle} {coverImage}/>
    
    
    <Gallery {images} />

    <svelte:head>
    <title>{title}</title>
    <meta name="description" content="{title} proje sayfası">
    </svelte:head>
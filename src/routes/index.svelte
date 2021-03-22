<script>
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import Projects from '../components/Projects.svelte';

	// import '@glidejs/glide/dist/css/glide.theme.min.css';


	onMount(async () => {
		new Glide('.glide').mount()
	});

</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
  <div class="container mx-auto px-6">

    <div class="glide sm:w-5/6 xs:w-full mx-auto">
		<div class="glide__track" data-glide-el="track">
		  <ul class="glide__slides">
			<li class="glide__slide"><img src="erturk_mobilya_uretim_slider_1.jpg" alt="Slide 1"></li>
			<li class="glide__slide"><img src="erturk_mobilya_uretim_slider_2.jpg" alt="Slide 2"></li>
			<li class="glide__slide"><img src="erturk_mobilya_uretim_slider_3.jpg" alt="Slide 3"></li>
		  </ul>
		</div>
		<div class="items-center glide__arrows" data-glide-el="controls">
			<button class="text-white bg-indigo-400 px-1 py-1 glide__arrow glide__arrow--left" data-glide-dir="<">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
				  </svg>
			</button>
			<button class="text-white bg-indigo-400 px-1 py-1 glide__arrow glide__arrow--right " data-glide-dir=">">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
				  </svg>
			</button>
		  </div>
	</div>
	
  </div>
</div>


<section style="background-color: #667eea">
	<div class="flex flex-row justify-center items-center mx-auto px-6 text-center py-10">
	  <h3 class="text-2xl text-white self-center px-6">
		Yüksek kalitede mobilya üretimi ile tanışın
	  </h3>
	  <button
		class="self-center bg-white font-bold shadow-lg uppercase tracking-wider py-2 px-2"
	  >
		Teklif Al
	  </button>
	</div>
</section>

<section class="bg-gray-100">
	<div class="container mx-auto px-6 py-20">
	  <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
		Testimonials
	  </h2>
	  <div class="flex flex-wrap ">
		<div class="w-full md:w-1/3 px-2 mb-4">
		  <div class="bg-white rounded shadow py-2 h-full">
			<figure class="">
			  <img src="./erturk_mobilya_uretim_biz-kimiz.jpg" class="border-1 mx-auto" alt="Biz Kimiz">
			</figure>

			<h3 class="text-base px-6 mb-5">Ertürk Mobilya</h3>

			<p class="text-gray-800 text-base px-6 mb-5">1970’den günümüze sürekli güncellenen altyapısı, 1000m2 üretim alanına sahip atölyemizde kaliteli mobilya ürünleri üretmekteyiz.</p>

			<p class="text-gray-800 text-base px-6 mb-5">50 yıla yakın tecrübesiyle, banka, otel, zincir cafe ve restaurant dekorasyonlarıyla birlikte, mutfak, banyo, ev dekorasyonu ve tadilat işlerini de müşteri beklentilerine uygun olarak başarıyla gerçekleştirmiştir.			</p>

			<p class="text-gray-800 text-base px-6 mb-5">İşlevsellik, kalite ve müşteri memnuniyetini ilke edinen firmamız yaşam alanlarına mutluluk getirmeye devam etmektedir.
			</p>
		  </div>
		</div>
		<div class="w-full md:w-1/3 px-2 mb-4">
		  <div class="bg-white rounded shadow py-2 h-full">
			<figure class="">
				<img src="erturk_mobilya_uretim_hakkimizda.jpg" class="border-1 mx-auto" alt="Biz Kimiz">
			</figure>

			<h3 class="text-base px-6 mb-5">Ne Yapıyoruz</h3>
			<p class="text-gray-800 text-base px-6 mb-5">İnovatif tasarım çizgilerini takip ederek yatak odaları, yemek odaları, mutfak, banyo, TV üniteleri ve mobilya aksesuarlarını kalite standartlarına uygun olarak üretmekteyiz.</p>
			<p class="text-gray-800 text-base px-6 mb-5">Mobilya üretiminde mdflam, ağaç kaplama, lake, ahşap ve aksesuar ürünlerini müşterinin ihtiyaçlarına göre özenle seçiyor ve yüksek kalitede uyguluyoruz.</p>
		  </div>
		</div>
		<div class="w-full md:w-1/3 px-2 mb-4">
		  <div class="bg-white rounded shadow py-2 h-full">
			<figure class="">
				<img src="erturk_mobilya_uretim_neden.jpg" class="border-1 mx-auto" alt="Biz Kimiz">
			</figure>
			<h3 class="text-base px-6 mb-5">Neden Biz</h3>
			<p class="text-gray-800 text-base px-6 mb-5">Birçok farklı müşteri grubundan edindiğimiz deneyimlerle sektörde uzun yıllardır hizmet vermekteyiz.</p>
			<p class="text-gray-800 text-base px-6 mb-5">Müşteri mağduriyeti oluşmaması için de planlamadan montaja kaliteyi düşürmeden belli bir düzeyde üretim yapmaktayız.</p>
			<p class="text-gray-800 text-base px-6 mb-5">Montaj aşamasında titizlikle uygulanan mobilyalar, uzun yıllar keyifle kullanabileceğiniz ürünlere dönüşmektedir.</p>
		  </div>
		</div>
	  </div>
	</div>
</section>

<Projects />
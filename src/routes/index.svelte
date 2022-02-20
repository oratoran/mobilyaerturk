<script>
  import Projeler from '$lib/PortfolioList.svelte';

  // Import Swiper Svelte components
  import { Navigation, Pagination, Scrollbar } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  let limit = 3;

</script>

<section class="w-full  mx-auto">
  <Swiper
    spaceBetween={0}
    slidesPerView={1}
    modules={[Navigation, Pagination, Scrollbar]}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide><img src="/erturk_mobilya_uretim_slider_1.jpg" alt="Slider 1" class="w-full h-full"></SwiperSlide>
    <SwiperSlide><img src="/erturk_mobilya_uretim_slider_2.jpg" alt="Slider 2" class="w-full h-full"></SwiperSlide>
    <SwiperSlide><img src="/erturk_mobilya_uretim_slider_3.jpg" alt="Slider 3" class="w-full h-full"></SwiperSlide>

  </Swiper>
</section>

<section class="md:w-[1440px] mx-auto py-16">
  <div class="text-center font-serif pb-8">
    <h1 class="text-3xl text-zinc-600">ERTÜRK MOBİLYA</h1>
    <p class="text-2xl p-2 italic" >1970'den günümüze işimizi tutku ile yapıyoruz...</p>
    <p class="text-left lg:text-center">1970’den günümüze sürekli güncellenen altyapısı, 1000m2 üretim alanına sahip atölyemizde kaliteli mobilya ürünleri üretmekteyiz.</p>
    <p class="text-left lg:text-center">    50 yıla yakın tecrübesiyle, banka, otel, zincir cafe ve restaurant dekorasyonlarıyla birlikte, mutfak, banyo, ev dekorasyonu ve tadilat işlerini de müşteri beklentilerine uygun olarak başarıyla gerçekleştirmekteyiz.</p>
    <p class="text-left lg:text-center">   İşlevsellik, kalite ve müşteri memnuniyetini ilke edinen firmamız yaşam alanlarına mutluluk getirmeye devam etmektedir.</p>  
  </div>

  <div class="flex flex-col md:flex-row text-center space-x-8">
    <div class="flex-auto md:w-1/3">
      <img class="rounded-3xl  border-4 border-yellow-800" src="/erturk_mobilya_tasarim.jpeg" alt="Ertürk Mobilya Mimari Planlama">
      <h2 class="text-2xl text-yellow-800 font-serif mt-4">Mimari Planlama</h2>
      <p>Müşteri beklentilerine göre istenen işin modellenmesi, kullanılan malzeme türüne ve detaylarına göre fiyatlandırılması, üretim ve uygulama dahil sürelerin belirlenmesini kapsar.</p>
    </div>
    <div class="flex-auto md:w-1/3">
      <img class="rounded-3xl  border-4 border-yellow-800" src="/erturk_mobilya_montaj.jpeg" alt="Ertürk Mobilya Mobilya Üretimi">
      <h2 class="text-2xl text-yellow-800 font-serif mt-4">Mobilya Üretimi</h2>
      <p>Mimari planlaması yapılan proje, söz verilen tarihlere kadar yüksek teknolojili makinalar yardımıyla titizlikle üretilir.</p>
    </div>
    <div class="flex-auto md:w-1/3">
      <img class="rounded-3xl  border-4 border-yellow-800" src="/erturk_mobilya_uretim.jpeg" alt="Ertürk Mobilya Mobilya Montajı">
      <h2 class="text-2xl  text-yellow-800 font-serif mt-4">Mobilya Montajı</h2>
      <p>Üretimi tamamlanan mobilya ürünleri titizlikle kurulumu yapılarak müşterilere teslim edilir.</p>
    </div>
  </div>

  <div class="text-center mt-24">
    <h2 class="text-3xl pb-4">Bitirdiğimiz Projelerden</h2>
    <a href="/projeler" class="underline text-blue-700">Bütün projeleri görmek için tıklayınız</a>
  </div>

  <Projeler {limit}/>
</section>

<svelte:head>
  <title>Ertürk Mobilya - Mobilya Dekorasyon</title>
  <meta name="description" content="Ertürk Mobilya 1970'den günümüze edindiği mobilya üretim ve dekotasyon tecrübesiyle, banka, otel, zincir cafe ve restaurant hizmet vermektedir.">
</svelte:head>
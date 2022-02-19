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

<section class="w-full md:w-[1200px] mx-auto">
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    modules={[Navigation, Pagination, Scrollbar]}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  >
    <SwiperSlide><img src="/erturk_mobilya_uretim_slider_1.jpg" alt="Slider 1"></SwiperSlide>
    <SwiperSlide><img src="/erturk_mobilya_uretim_slider_2.jpg" alt="Slider 2"></SwiperSlide>
    <SwiperSlide><img src="/erturk_mobilya_uretim_slider_3.jpg" alt="Slider 3"></SwiperSlide>

  </Swiper>
</section>

<div class=" p-16">
    <p class="text-center text-3xl font-serif text-zinc-600">ERTÜRK MOBİLYA</p>
    <p class="text-center text-1xl font-serif p-2 italic" >1970'den günümüze işimizi tutku ile yapıyoruz...</p>
</div>


<div class="flex flex-col md:flex-row text-center px-6">
  <div class="px-4 pb-16 md:pb-4">
    <img class="rounded-full" src="/erturk_mobilya_tasarim.jpeg" alt="">
    <h3 class="text-2xl text-zinc-600 font-serif mt-4">Mimari Planlama</h3>
  </div>
  <div class="px-4 pb-16 md:pb-4">
    <img class="rounded-full" src="/erturk_mobilya_montaj.jpeg" alt="">
    <h3 class="text-2xl text-zinc-600 font-serif mt-4">Mobilya Üretim</h3>
  </div>
  <div class="px-4 pb-16 md:pb-4">
    <img class="rounded-full" src="/erturk_mobilya_uretim.jpeg" alt="">
    <h3 class="text-2xl  text-zinc-600 font-serif mt-4">Montaj</h3>
  </div>
</div>

<section class="mt-6 mb-6 p-6" id="middle-section">
  <div class="">
    <p class="text-left lg:text-center">1970’den günümüze sürekli güncellenen altyapısı, 1000m2 üretim alanına sahip atölyemizde kaliteli mobilya ürünleri üretmekteyiz.</p>

    <p class="text-left lg:text-center">    50 yıla yakın tecrübesiyle, banka, otel, zincir cafe ve restaurant dekorasyonlarıyla birlikte, mutfak, banyo, ev dekorasyonu ve tadilat işlerini de müşteri beklentilerine uygun olarak başarıyla gerçekleştirmekteyiz.
    </p>
    
<p class="text-left lg:text-center">   İşlevsellik, kalite ve müşteri memnuniyetini ilke edinen firmamız yaşam alanlarına mutluluk getirmeye devam etmektedir.
</p>  
  </div>
</section>


<div class="p5 h-30 relative opacity-50  m-[90px] text-center">
  <h3 class="text-3xl pb-4">Bitirdiğimiz Projeler</h3>
  <a href="/projeler" class="underline">Tümünü görmek için tıklayınız</a>
</div>

<Projeler {limit}/>
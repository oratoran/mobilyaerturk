<script>
  // Import Swiper Svelte components
  import { Navigation, Pagination, Scrollbar } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

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
    <img class="rounded-full" src="/mimari_planlama2.png" alt="">
    <h3 class="text-2xl text-zinc-600 font-serif mt-4">Mimari Planlama</h3>
  </div>
  <div class="px-4 pb-16 md:pb-4">
    <img class="rounded-full" src="/mobilya_uretim.jpeg" alt="">
    <h3 class="text-2xl text-zinc-600 font-serif mt-4">Mobilya Üretim</h3>
  </div>
  <div class="px-4 pb-16 md:pb-4">
    <img class="rounded-full" src="/montaj.jpeg" alt="">
    <h3 class="text-2xl  text-zinc-600 font-serif mt-4">Montaj</h3>
  </div>
</div>

<section class="mt-6 mb-6 p-6" id="middle-section">
  <div class="">
    <p>1970’den günümüze sürekli güncellenen altyapısı, 1000m2 üretim alanına sahip atölyemizde kaliteli mobilya ürünleri üretmekteyiz.</p>

    <p>    50 yıla yakın tecrübesiyle, banka, otel, zincir cafe ve restaurant dekorasyonlarıyla birlikte, mutfak, banyo, ev dekorasyonu ve tadilat işlerini de müşteri beklentilerine uygun olarak başarıyla gerçekleştirmekteyiz.
    </p>
    
<p>    İşlevsellik, kalite ve müşteri memnuniyetini ilke edinen firmamız yaşam alanlarına mutluluk getirmeye devam etmektedir.
</p>  
  </div>
</section>


<div class="p5 h-30 relative opacity-50  m-[90px] text-center">
  <h3 class="text-3xl pb-4">Bitirdiğimiz Projeler</h3>
  <a href="/projeler">Tümü</a>
</div>




<div class="container flex flex-col md:flex-row text-center  mx-auto ">
  <div class="relative p-2  mb-10 ">
  <img src="/proje1.png" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Asia Artemis Suite <br> Ataşehir</h2>

</div>

<div class="relative p-2 mb-10">
  <img src="lamec.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Lamec Hotel <br> Gebze</h2>

</div>
<div class="relative p-2 mb-10">
  <img src="retaj.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Retaj Termal Hotel <br> Yalova</h2>
  
</div>
</div>

   
<div class="container flex flex-col md:flex-row text-center  mx-auto ">
  <div class="relative p-2  mb-10 b ">
  <img src="my_homes_hotel_pendik.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">MYY Homes Hotel <br> Pendik</h2>

</div>

<div class="relative p-2 mb-10">
  <img src="grand_korfez_hotel_erturkmobilya.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Grand Körfez Hotel <br> Gebze</h2>

</div>
<div class="relative p-2 mb-10">
  <img src="sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Vizon Hotel <br>Şişli</h2>
  
</div>
</div>

<div class="container flex flex-col md:flex-row text-center  mx-auto ">
  <div class="relative p-2  mb-10 b ">
  <img src="salon_serenay_erturk_mobilya.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Serenay Düğün Salonu <br> İçerenköy</h2>

</div>

<div class="relative p-2 mb-10">
  <img src="old_city_hotel_sultanahmet_istanbul_mobilya_erturk.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Old City Hotel <br> Sultanahmet</h2>

</div>
<div class="relative p-2 mb-10">
  <img src="asia_royal_suite_maltepe_mobilya_erturk.jpeg" alt="" class="rounded-lg ">
  <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif ">Asia Royal Suite Hotel <br> Maltepe</h2>
  
</div>
</div>

<style>
  p {
    @apply pt-2 pb-2
  }
</style>



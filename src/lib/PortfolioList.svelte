<script>

export let limit = 12

let projects = [

  {
    projectTitle:"Şişli Vizon Hotel",
    projectSubtitle:"Şişli", 
    projectImage:"sisli_vizon_hotel_mobilya_dekorasyon_erturk_mobilya.jpeg", 
    projectLink:"sisli-vizon-hotel-sisli"
  },
  { 
    projectTitle:"Lamec Hotel", 
    projectSubtitle:"Gebze", 
    projectImage:"lamec.jpeg", 
    projectLink:"lamec-hotel-gebze"
  },
  {
    projectTitle:"Retaj Termal Hotel", 
    projectSubtitle:"Yalova", 
    projectImage:"retaj.jpeg", 
    projectLink:"retaj-termal-hotel-yalova"
  },
  {
    projectTitle:"Asia Artemis Hotel", 
    projectSubtitle:"Ataşehir", 
    projectImage: "proje1.png",
    projectLink: "asia-artemis-hotel-atasehir"
  },
  {
    projectTitle:"Asia Royal Suite Hotel", 
    projectSubtitle:"Maltepe", 
    projectImage:"asia_royal_suite_maltepe_mobilya_erturk.jpeg", 
    projectLink:"asia-royal-suite-maltepe"
  },
  {
    projectTitle:"Caliente Garden", 
    projectSubtitle:"Polonezköy", 
    projectImage:"caliente-garden-polonezkoy/caliente_garden_polonezkoy_mobilya_erturk_3.jpeg", 
    projectLink:"caliente-garden-polonezkoy"
  },
  {
    projectTitle:"Dov Hotel", 
    projectSubtitle:"Manisa", 
    projectImage:"dov-otel-manisa/dov_otel_manisa_mobilya_erturk_5.png", 
    projectLink:"dov-otel-manisa"
  },
  {
    projectTitle:"Grand Körfez Hotel", 
    projectSubtitle:"Gebze", 
    projectImage:"grand-korfez-hotel-gebze/grand_korfez_hotel_gebze_4.jpeg", 
    projectLink:"grand-korfez-hotel-gebze"
  },
  {
    projectTitle:"Myy Homes Hotel", 
    projectSubtitle:"Pendik", 
    projectImage:"myy-homes-pendik/myy_homes_pendik_mobilya_erturk_1.jpeg", 
    projectLink:"myy-homes-pendik"
  },
  {
    projectTitle:"Northstar Hotel", 
    projectSubtitle:"Bayramoğlu", 
    projectImage:"northstar-hotel-bayramoglu/north-star-resort-hotel-bayramoglu.jpeg", 
    projectLink:"northstar-hotel-bayramoglu"
  },
  {
    projectTitle:"Old City Hotel", 
    projectSubtitle:"Sultanahmet", 
    projectImage:"old_city_hotel_sultanahmet_istanbul_mobilya_erturk.jpeg", 
    projectLink:"old-city-hotel-sultanahmet"
  },
  {
    projectTitle:"Salon Selay Düğün Salonu", 
    projectSubtitle:"İçerenköy", 
    projectImage:"salon_serenay_erturk_mobilya.jpeg", 
    projectLink:"salon-selay-dugun-salonu-icerenkoy"},
];


</script>


<div class=" flex flex-wrap md:flex-row text-center  mx-auto ">

  {#each projects.slice(0, limit) as project}


  <div class=" p-2 md:basis-1/3  mb-10 ">
    <a href="/{project.projectLink}">
      <img src="/{project.projectImage}" alt="" class="rounded-lg ">
      <h2 class="text-center opacity-60 text-black-200 mt-2 text-2xl font-serif "> {project.projectTitle} <br> {project.projectSubtitle}</h2>
    </a>
  </div>
  
  {/each}
  
  </div>
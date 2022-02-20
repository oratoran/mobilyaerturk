<script>
  let show = true;
  let showMenu = () => show = !show;
</script>
    
<header class="flex flex-wrap justify-between bg-gray-900 p-8">
  <a href="/" class="">
    <h1 class="text-amber-400 font-serif text-4xl">Ertürk Mobilya</h1>
  </a>
  <button on:click={showMenu} class="md:hidden  p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <svg class="w-8 h-8 pl-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button>
  <nav class="w-full md:w-max">
    
    <div class="{show ? 'hidden md:flex ' : 'flex flex-col'}  md:flex-row  justify-between w-full  md:w-auto text-amber-400 text-xl" on:click={showMenu}>
      <a href="/" class="px-3 py-2 rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">Ana Sayfa</a>
      <a href="/projeler" class="px-3 py-2 rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">Projeler</a>
      <a href="/hakkimizda" class="px-3 py-2  rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">Hakkımzda</a>
      <a href="/iletisim" class="px-3 py-2  rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">İletişim</a>  
    </div>
  </nav>
</header>
<script>
    
    let show = true;
    let showMenu = () => show = !show;
  
  </script>
    
    <header class="flex justify-between bg-gray-900 p-8">
     <a href="/"> <div class="text-amber-400 font-['Bitter'] text-4xl"><h1>Ertürk Mobilya</h1></div></a>
  
  
      <nav class="flex flex-col md:flex-row float-right">
        <button on:click={showMenu} data-collapse-toggle="mobile-menu-4" type="button" class=" p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="{show ? 'hidden' : ''} md:flex justify-between items-center w-full  md:w-auto md:order-1" id="mobile-menu-4" on:click={showMenu}>
          <a href="/" class="font-bold px-3 py-2 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">Ana Sayfa</a>
          <a href="/projeler" class="font-bold px-3 py-2 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">Projeler</a>
          <a href="/hakkimizda" class="font-bold px-3 py-2 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">Hakkımzda</a>
          <a href="/iletisim" class="font-bold px-3 py-2 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 duration-700">İletişim</a>  
        </div>
        </nav>
    </header>
  
  
    <svelte:head>
      <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap" rel="stylesheet">
    </svelte:head>
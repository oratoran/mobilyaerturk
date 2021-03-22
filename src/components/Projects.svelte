<script>
	export let limit = 20;
	import posts from '../routes/proje/_projeler.js';
</script>

<section class="bg-gray-100">
	<div class="container mx-auto px-6 py-20">
	  <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
		Bitirdiğimiz Projeler {limit}
	  </h2>
	  <div class="flex flex-wrap ">
		{#each posts.slice(0, limit) as post, i}
		<div class="w-full md:w-1/3 px-2 mb-4">
		  <div class="bg-white rounded shadow py-0 h-full">
			<figure class="">
			  <a href="proje/{post.slug}" title="{post.title}"><img src="{post.image}" class="border-1 mx-auto" alt="{post.title}"></a>
			</figure>
			<h3 class="text-base px-6 mb-5">{post.title}</h3>
		  </div>
		</div>
		{/each}
	  </div>
	</div>
</section>
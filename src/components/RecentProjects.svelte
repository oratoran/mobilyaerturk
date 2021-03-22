
<script>
	export let posts;
</script>
<script context="module">
	export function preload() {
		return this.fetch(`./proje/_projeler.js`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>



<section class="bg-gray-100">
	<div class="container mx-auto px-6 py-20">
	  <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
		Bitirdiğimiz Projeler
	  </h2>
	  <div class="flex flex-wrap ">
		{#each posts as post}
		<div class="w-full md:w-1/3 px-2 mb-4">
		  <div class="bg-white rounded shadow py-2 h-full">
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
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import Button from '$lib/components/Button.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Project AI Image Generator</title>
</svelte:head>

<Header />

<section class="form-image">
	<!-- Form -->
	<form method="POST" class="flex flex-col gap-2" use:enhance>
		<h3 class="text-xl text-center">What image do you want to generate?</h3>
		<input
			name="image-desc"
			type="text"
			class="py-2 px-4 rounded text-center"
			placeholder="Describe Image"
		/>
		<Button type="submit">Generate Image</Button>
	</form>

	<!-- Result -->
	<div class="pt-4">
		{#if form?.success}
			{#each form?.data?.images?.data as image}
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="rounded-xl" src={image.url} alt="Generated Image" />
			{/each}
		{/if}
	</div>
</section>

<Footer />

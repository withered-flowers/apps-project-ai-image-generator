<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let form: ActionData;

	let loading: boolean = false;

	const useEnchanceHandler: SubmitFunction = async () => {
		loading = true;

		return async ({ update }) => {
			update();
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Project AI Image Generator</title>
	<meta
		name="description"
		content="A simple project for Project AI Image Generator based on OpenAI"
	/>
</svelte:head>

<section class="w-1/2">
	<Header />

	<section class="form-image py-4 flex flex-col items-center justify-center">
		<!-- Form -->
		<form method="POST" class="flex flex-col gap-2" use:enhance={useEnchanceHandler}>
			<h3 class="text-xl text-center">What image do you want to generate?</h3>
			<input
				name="image-desc"
				type="text"
				class="py-2 px-4 rounded text-center w-full"
				placeholder="Describe Image"
			/>
			<button
				type="submit"
				class="mx-auto bg-sky-200 hover:bg-sky-400 text-slate-700 hover:text-slate-100 py-2 px-4 rounded disabled:bg-sky-200/50 disabled:text-slate-700/50"
				disabled={loading}
			>
				Generate Image
			</button>
		</form>

		<!-- Result -->
		{#if !loading && form?.data}
			<div class="pt-2 bg-zinc-200 px-4 rounded pb-4 mt-2">
				{#if form?.success}
					<h3 class="font-semibold text-center">{form?.data?.keyword}</h3>
					{#each form?.data?.images?.data as image}
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img
							in:fade={{ duration: 750 }}
							out:fade={{ duration: 200 }}
							class="rounded-xl"
							src={image.url}
							alt="Generated Image"
						/>
					{/each}
				{/if}
			</div>
		{/if}

		{#if form?.error}
			<div class="pt-2 mx-auto text-center" transition:fade>
				<p class="text-red-500 text-center">
					<strong class="text-xl">Error -</strong>
					{form?.error}
				</p>
			</div>
		{/if}
	</section>

	<Footer />
</section>

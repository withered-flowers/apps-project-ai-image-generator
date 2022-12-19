<script lang="ts">
	export let type: string;
</script>

<button
	{type}
	class="mx-auto bg-sky-200 hover:bg-sky-400 text-slate-700 hover:text-slate-100 py-2 px-4 rounded"
>
	<slot />
</button>

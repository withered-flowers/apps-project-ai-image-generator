<script lang="ts">
	export let href: string;
</script>

<a {href} class="text-blue-500 hover:text-blue-600 hover:underline">
	<slot />
</a>

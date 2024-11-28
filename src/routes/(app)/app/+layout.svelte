<script lang="ts">
	import { onMount } from 'svelte';
	import { Auth } from '$lib/scripts/auth.js';

	onMount(() => {
		setInterval(() => {
			Auth.check();
		}, 60 * 1000);
	});
</script>

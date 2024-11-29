<script lang="ts">
	import { onMount } from 'svelte';
	import { Auth } from '$lib/scripts/auth.js';
	import Navbar from '$lib/components/env/mainNav.svelte';
	import FbConnect from '$lib/components/env/fbConnect.svelte';

	onMount(() => {
		setInterval(() => {
			Auth.check();
		}, 60 * 1000);
	});
</script>

<FbConnect />
<Navbar />

<slot />

<script lang="ts">
	import { cn } from '$lib/utils.js';

	let className: any = 'p-4';
	export { className as class };
	export let title: string;
	export let description: string;
	let cardContent = {
		title: title,
		description: description
	};
</script>

<div class={cn('text-left', className)}>
	<h3 class="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">
		{cardContent.title}
	</h3>
	<p class="text-gray-700 dark:text-gray-300">
		{cardContent.description}
	</p>
</div>

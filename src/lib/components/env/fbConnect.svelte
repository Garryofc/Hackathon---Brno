<script lang="ts">
	import { addFb, _fbAcc } from '$lib/store/_acc.js';
</script>

{#if $addFb}
	<main
		class="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-12 bg-white"
	>
		<h1 class="text-center text-4xl font-bold md:text-5xl">
			Add your
			<span class="relative inline-block text-primary">
				Facebook
				<img
					class="absolute bottom-0 left-0 h-fit w-full translate-y-[53%]"
					src="/underline.png"
					alt="underline"
				/>
			</span>
			account
		</h1>
		<div class="h-auto w-fit">
			{#if $_fbAcc && $_fbAcc.length > 0}
				{#each $_fbAcc as acc}
					<div class="flex items-center bg-primary px-4 py-2">
						<h3>{acc.accName}</h3>
					</div>
				{/each}
			{:else}
				<button
					class="relative flex items-center gap-4 rounded-md bg-primary px-4 py-2.5 text-white"
				>
					<i class="bi bi-facebook text-2xl"></i>
					<h3>Add Facebook account</h3>
					<img
						src="/arrowFTTL.png"
						alt="arrow-right"
						class="absolute right-0 top-0 translate-x-[130%] translate-y-[-40%]"
					/>
				</button>
			{/if}
		</div>
	</main>
{/if}

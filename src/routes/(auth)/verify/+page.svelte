<script lang="ts">
	import { PinInput } from 'bits-ui';
	import { Button } from '$lib/components/ui/button/index.js';
	import { onMount } from 'svelte';
	import { Auth } from '$lib/scripts/auth.js';
	export let data;

	let value: any = [];

	onMount(async () => {
		if (data.status == 200) {
			location.href = '/app';
		} else {
			await Auth.verificationinit();
		}
	});
</script>

<main
	class="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center pt-8"
>
	<img src="/Mail_Envilope.png" alt="Mail Envelope" class="mb-[45px]" />
	<div class="mb-[41px]">
		<h1 class="text-center text-4xl font-extrabold md:text-5xl">
			Enter the <span class="relative inline-block text-primary">code</span> we sent to your
			<span class="text-primary">email</span>:
		</h1>
	</div>
	<div class="rounded-[12px] bg-white p-[19px]">
		<PinInput.Root bind:value class="mb-[12px] flex items-center gap-2" placeholder="0">
			<PinInput.Input
				class="flex h-12 w-10 select-none rounded-lg border border-b-4 border-slate-300 border-b-slate-400 bg-slate-200 px-2 py-3 text-center font-mono text-[17px] tracking-wide text-slate-700 placeholder-shown:border-slate-200 focus-within:border-slate-400 focus-within:shadow focus-within:outline-none"
			/>
			<PinInput.Input
				class="flex h-12 w-10 select-none rounded-lg border border-b-4 border-slate-300 border-b-slate-400 bg-slate-200 px-2 py-3 text-center font-mono text-[17px] tracking-wide text-slate-700 placeholder-shown:border-slate-200 focus-within:border-slate-400 focus-within:shadow focus-within:outline-none"
			/>
			<PinInput.Input
				class="flex h-12 w-10 select-none rounded-lg border border-b-4 border-slate-300 border-b-slate-400 bg-slate-200 px-2 py-3 text-center font-mono text-[17px] tracking-wide text-slate-700 placeholder-shown:border-slate-200 focus-within:border-slate-400 focus-within:shadow focus-within:outline-none"
			/>
			-
			<PinInput.Input
				class="flex h-12 w-10 select-none rounded-lg border border-b-4 border-slate-300 border-b-slate-400 bg-slate-200 px-2 py-3 text-center font-mono text-[17px] tracking-wide text-slate-700 placeholder-shown:border-slate-200 focus-within:border-slate-400 focus-within:shadow focus-within:outline-none"
			/>
			<PinInput.Input
				class="flex h-12 w-10 select-none rounded-lg border border-b-4 border-slate-300 border-b-slate-400 bg-slate-200 px-2 py-3 text-center font-mono text-[17px] tracking-wide text-slate-700 placeholder-shown:border-slate-200 focus-within:border-slate-400 focus-within:shadow focus-within:outline-none"
			/>
			<PinInput.Input
				class="flex h-12 w-10 select-none rounded-lg border border-b-4 border-slate-300 border-b-slate-400 bg-slate-200 px-2 py-3 text-center font-mono text-[17px] tracking-wide text-slate-700 placeholder-shown:border-slate-200 focus-within:border-slate-400 focus-within:shadow focus-within:outline-none"
			/>
			<PinInput.HiddenInput />
		</PinInput.Root>
		<Button
			on:click={async () => {
				Auth.verify(value.join(''));
			}}
			class="w-[100%]">Confirm</Button
		>
	</div>
</main>

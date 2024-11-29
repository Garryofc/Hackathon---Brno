<script lang="ts">
	import Bar from '$lib/components/env/bar.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Icon from 'lucide-svelte';
	import { onMount } from 'svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import RunAds1 from '$lib/components/env/RunAds1.svelte';
	import RunAds2 from '$lib/components/env/RunAds2.svelte';

	let fullMounted: boolean = false;

	let runAdsss = false;

	onMount(() => {
		fullMounted = true;
	});
</script>

{#if fullMounted}
	<main class="flex h-full grow flex-col justify-evenly gap-4 bg-[#FFFFFF] px-12 py-8">
		{#if runAdsss}
			<RunAds2 />
		{/if}
		<!-- <RunAds1 /> -->
		<div class="flex flex-col justify-between">
			<div class="flex items-center justify-between">
				<h1 class="text-4xl font-black">Dashboard</h1>
				<div class="flex items-center">
					<button class="flex items-center rounded-md border bg-white px-4 py-2 transition duration-200 hover:bg-gray-100">
						<svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
						</svg>
						AB Tests Required
					</button>

					<Button class="transition duration-300 px-4 py-2" on:click={() => runAdsss = true}> Run Ads </Button>
				</div>
			</div>

			<Tabs.Root value="month" class="mt-4 w-fit">
				<Tabs.List class="flex gap-1 rounded-md bg-gray-100 px-1.5">
					<Tabs.Trigger value="day" class="rounded-sm px-3 py-1 text-sm transition duration-200 hover:bg-white">Day</Tabs.Trigger>
					<Tabs.Trigger value="week" class="rounded-sm px-3 py-1 text-sm transition duration-200 hover:bg-white">Week</Tabs.Trigger>
					<Tabs.Trigger value="month" class="rounded-sm px-3 py-1 text-sm transition duration-200 hover:bg-white">Month</Tabs.Trigger>
					<Tabs.Trigger value="year" class="rounded-sm px-3 py-1 text-sm transition duration-200 hover:bg-white">Year</Tabs.Trigger>
				</Tabs.List>
			</Tabs.Root>
		</div>

		<div class="grid grid-cols-4 gap-4">
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between p-5 pb-0">
					<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
					<Icon.DollarSign class="h-4 w-4 " />
				</Card.Header>
				<Card.Content class="p-5 pt-0">
					<div class="text-2xl font-bold">$45,231.89</div>
					<p class="text-xs">+20.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between p-5 pb-0">
					<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
					<Icon.Users class="h-4 w-4 " />
				</Card.Header>
				<Card.Content class="p-5 pt-0">
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs">+180.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between p-5 pb-0">
					<Card.Title class="text-sm font-medium">Sales</Card.Title>
					<Icon.CreditCard class="h-4 w-4 " />
				</Card.Header>
				<Card.Content class="p-5 pt-0">
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-xs">+19% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between p-5 pb-0">
					<Card.Title class="text-sm font-medium">Active Now</Card.Title>
					<Icon.Activity class="h-4 w-4 " />
				</Card.Header>
				<Card.Content class="p-5 pt-0">
					<div class="text-2xl font-bold">+573</div>
					<p class="text-xs">+201 since last hour</p>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="grid h-full grow grid-cols-11 gap-4">
			<Card.Root class="col-span-6 flex flex-col justify-between">
				<Card.Header>
					<Card.Title class="">Monthly sales</Card.Title>
				</Card.Header>
				<Card.Content class="">
					<Bar />
				</Card.Content>
			</Card.Root>

			<Card.Root class="col-span-3 flex h-full flex-col justify-between">
				<Card.Header class="flex flex-row items-center justify-between">
					<div class="flex h-full flex-col justify-between">
						<Card.Title class="flex items-center justify-between">Favourite products</Card.Title>
						<Card.Description>Top products this month</Card.Description>
					</div>
					<Icon.ShoppingBag class="h-4 w-4 " />
				</Card.Header>
				<Card.Content class="flex flex-col gap-3">
					{#each Array(5) as _, i}
						{#if i === 0}
							<div class="flex h-fit w-full items-center justify-between rounded-xl border px-4 py-3 shadow-lg">
								<div class="flex flex-col items-center">
									<h2 class="text-xl font-bold">36%</h2>
									<p class="text-xs font-semibold">Product {i + 1}</p>
								</div>
								<Button class="h-fit px-3 py-2">Create Ad</Button>
							</div>
						{:else}
							<div class="flex h-fit w-full items-center justify-between rounded-xl border px-4 py-2.5 shadow-lg">
								<h2 class="text-sm">36%</h2>
								<p class="text-xs font-semibold">Product {i + 1}</p>
							</div>
						{/if}
					{/each}
				</Card.Content>
				<Card.Footer class="flex justify-center">
					<Button class="flex w-fit gap-2 px-4"><Icon.CirclePlus class="h-4 w-4" />Add product</Button>
				</Card.Footer>
			</Card.Root>

			<Card.Root class="col-span-2">
				<Card.Header>
					<Card.Title class="flex items-center justify-between">Recent Sales <i class="bi bi-currency-dollar"></i></Card.Title>
					<Card.Description>x sales this month</Card.Description>
				</Card.Header>
				<Card.Content class="flex flex-col gap-8">
					{#each Array(7) as _, i}
						<div class="flex items-center justify-between">
							<div class="">
								<p class="text-sm font-medium leading-none">Product {i + 1}</p>
							</div>
							<div class="text-right font-medium">$1,999.00</div>
						</div>
					{/each}
				</Card.Content>
			</Card.Root>
		</div>
	</main>
{/if}

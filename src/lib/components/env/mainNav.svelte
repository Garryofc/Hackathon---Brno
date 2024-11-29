<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { _fbAcc, addFb } from '$lib/store/_acc.js';
	import * as Icon from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';

	let open: boolean = false;

	var selectedAcc: any;
	var acc: any = '';
	var value: any = '';

	$: {
		if ($_fbAcc && $_fbAcc.length > 0) {
			selectedAcc = value
				? $_fbAcc.find((framework: any) => framework.id === value.id)
				: $_fbAcc[0];
			acc = selectedAcc;
		} else {
			selectedAcc = null;
			acc = 'No available business portfolios';
		}
	}
</script>

<nav class="flex items-center justify-between border-b border-gray-300 bg-[#ffffff] p-4">
	<div class="flex items-center space-x-6">
		<Popover.Root bind:open>
			<Popover.Trigger>
				<Button variant="outline" role="combobox" class="w-[300px] justify-start gap-2">
					{#if selectedAcc}
						<Avatar.Root class="!aspect-square h-[100%] w-auto">
							<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
							<Avatar.Fallback>CN</Avatar.Fallback>
						</Avatar.Root>
						{acc.accountName}
					{:else}
						No available business portfolios
					{/if}
					<Icon.ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</Popover.Trigger>
			<Popover.Content
				class="mt-2 max-h-[300px] w-fit min-w-[300px] max-w-[1000px] overflow-y-auto p-0"
			>
				<Command.Root>
					<Command.Input placeholder="Search..." />
					<Command.Empty
						class="overflow-hidden p-1 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground"
					>
						<button
							on:click={() => {
								addFb.set(true);
								open = false;
							}}
							class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
						>
							<Icon.PlusCircle class="mr-2 h-4 w-4" />Add new business portfolio
						</button>
					</Command.Empty>
					<Command.Group>
						{#each $_fbAcc as account}
							<Command.Item
								value={account.id}
								onSelect={(currentValue) => {
									value = $_fbAcc.find((framework: any) => framework.id === currentValue);
								}}
								class="relative h-8 justify-start gap-2"
							>
								<Avatar.Root class="!aspect-square h-[100%] w-auto">
									<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
									<Avatar.Fallback>CN</Avatar.Fallback>
								</Avatar.Root>
								{account.accountName}
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.Root>
			</Popover.Content>
		</Popover.Root>

		<a href="/app">Overview</a>
		<a href="/app/ads">Ads</a>
	</div>

	<div class="flex items-center space-x-6">
		<div class="flex h-10 w-10 justify-center rounded-full bg-[#D9D9D9] p-2">
			<i class="bi bi-person-fill text-xl text-gray-700"></i>
		</div>
	</div>
</nav>

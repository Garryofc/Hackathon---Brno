<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Auth } from '$lib/scripts/auth.js';
	import { onMount } from 'svelte';
	export let data;

	var login_data = {
		email: '',
		password: ''
	};

	onMount(() => {
		if (data.status == 200) {
			location.href = '/app';
		}
	});
</script>

<main
	class="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center pt-8"
>
	<div class="mb-20">
		<h1 class="text-center text-4xl font-extrabold md:text-5xl">
			Level up your
			<span class="relative inline-block text-primary">
				Facebook
				<img
					class="absolute bottom-0 left-0 h-fit w-full translate-y-[53%]"
					src="/underline.png"
					alt="underline"
				/>
			</span>
			ads with
			<span class="text-primary">AI</span>
		</h1>
	</div>

	<Card.Root class="mb-20 w-full max-w-sm">
		<form
			on:submit={async (event) => {
				event.preventDefault();
				await Auth.login(login_data);
			}}
		>
			<Card.Header>
				<Card.Title class="text-2xl">Login</Card.Title>
				<Card.Description>Enter your email below to login to your account.</Card.Description>
			</Card.Header>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						bind:value={login_data.email}
						id="email"
						type="email"
						placeholder="alexmorgan@gmail.com"
					/>
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input bind:value={login_data.password} id="password" type="password" />
				</div>
				<div class="text-right">
					<a href="/register" class="text-sm text-blue-500 hover:underline">
						Don't have an account?
					</a>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Sign in</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</main>

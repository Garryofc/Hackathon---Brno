<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Auth } from '$lib/scripts/auth.js';

	var register_data = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
	};
</script>

<main
	class="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center"
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
				await Auth.register(register_data);
			}}
		>
			<Card.Header>
				<Card.Title class="text-2xl">Register</Card.Title>
				<Card.Description>Enter your email below to register a new account.</Card.Description>
			</Card.Header>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Full Name</Label>
					<Input bind:value={register_data.name} placeholder="Alex Morgan" />
				</div>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input bind:value={register_data.email} placeholder="alexmorgan@gmail.com" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input bind:value={register_data.password} type="password" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Confirm Password</Label>
					<Input bind:value={register_data.passwordConfirm} type="password" />
				</div>
				<div class="text-right">
					<a href="/" class="text-sm text-primary hover:underline"> Already have an account? </a>
				</div>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Register</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</main>

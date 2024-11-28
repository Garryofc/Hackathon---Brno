<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    import { Auth } from "$lib/scripts/auth.js";

    var login_data = {
		email: '',
		password: '',
	};

    async function handleSubmit(event: Event) {
        event.preventDefault();
        await Auth.login(login_data);
    }
</script>

<main class="flex flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center w-[100vw] h-[100vh] pt-8">
    <div class="mb-20">
    <h1 class="text-4xl md:text-5xl font-extrabold text-center ">
        Level up your
        <span class="text-primary relative inline-block">
            Facebook
            <img class="absolute left-0 bottom-0 w-full h-fit translate-y-[53%]" src="/underline.png" alt="underline">

        </span>
        ads with
        <span class="text-primary">AI</span>
    </h1>
    </div>
    
    <Card.Root class="w-full max-w-sm mb-20">
        <form on:submit={handleSubmit}>

        <Card.Header>
            <Card.Title class="text-2xl">Login</Card.Title>
            <Card.Description>Enter your email below to login to your account.</Card.Description>
        </Card.Header>
        <Card.Content class="grid gap-4">
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input bind:value={login_data.email} id="email" type="email" placeholder="alexmorgan@gmail.com" required />
            </div>
            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input bind:value={login_data.password} id="password" type="password" required />
            </div>
            <div class="text-right">
                <a href="/register" class="text-sm text-blue-500 hover:underline">
                    Don't have an account?
                </a>
            </div>
        </Card.Content>
        <Card.Footer>
            <Button type='submit' class="w-full">Sign in</Button>
        </Card.Footer>
    </form>

    </Card.Root>
</main>

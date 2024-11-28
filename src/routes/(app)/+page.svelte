<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
</script>

<main class="flex flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center w-[100vw] h-[100vh] pt-8">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">
        <span class="text-black">Level up your </span>
        <span class="text-blue-500 font-bold">Facebook</span>
        <span class="text-black"> ads with </span>
        <span class="text-blue-500 font-bold">AI</span>
    </h1>
    
    <Card.Root class="w-full max-w-sm">
        <Card.Header>
            <Card.Title class="text-2xl">Login</Card.Title>
            <Card.Description>Enter your email below to login to your account.</Card.Description>
        </Card.Header>
        <Card.Content class="grid gap-4">
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="jannovak@seznam.cz" required />
            </div>
            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            <div class="text-right">
                <a href="/register" class="text-sm text-blue-500 hover:underline">
                    Don't have an account?
                </a>
            </div>
        </Card.Content>
        <Card.Footer>
            <Button class="w-full">Sign in</Button>
        </Card.Footer>
    </Card.Root>
</main>

<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    import { Auth } from "$lib/scripts/auth.js";

    var register_data = {
		name: '',
		email: '',
		password: '',
        passwordConfirm: ''
	};

    async function handleSubmit(event: Event) {
        event.preventDefault();
        await Auth.register(register_data);
    }
    </script>
  
  <main class="flex flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center w-[100vw] h-[100vh]">
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
            <Card.Title class="text-2xl">Register</Card.Title>
            <Card.Description>Enter your email below to register a new account.</Card.Description>
          </Card.Header>
          <Card.Content class="grid gap-4">

            <div class="grid gap-2">
              <Label for="email">Full Name</Label>
              <Input bind:value={register_data.name} type="name" placeholder="Alex Morgan" required />
            </div>
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input bind:value={register_data.email} type="email" placeholder="alexmorgan@gmail.com" required />
              </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input bind:value={register_data.password} type="password" required />
            </div>
            <div class="grid gap-2">
                <Label for="password">Confirm Password</Label>
                <Input bind:value={register_data.passwordConfirm} type="password" required />
            </div>
            <div class="text-right">
              <a href="/" class="text-sm text-primary hover:underline">
                 Already have an account?
              </a>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button type='submit' class="w-full">Register</Button>
          </Card.Footer>
        </form>
        </Card.Root>
  </main>
    
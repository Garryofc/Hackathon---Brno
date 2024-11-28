<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    </script>
  
  <main class="flex flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center w-[100vw] h-[100vh]">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">
      Level up your
      <span class="text-primary font-bold">Facebook
      <span class="absolute w-full h-[2px] bg-center bg-no-repeat bg-[url('/underline.png')] -bottom-1 left-0"></span> 
        
      </span>
       ads with
      <span class="text-primary font-bold">AI</span>
  </h1>
      <Card.Root class="w-full max-w-sm">
          <Card.Header>
            <Card.Title class="text-2xl">Register</Card.Title>
            <Card.Description>Enter your email below to register a new account.</Card.Description>
          </Card.Header>
          <Card.Content class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Full Name</Label>
              <Input id="email" type="email" placeholder="John Doe" required />
            </div>
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="jannovak@seznam.cz" required />
              </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div class="grid gap-2">
                <Label for="password">Confirm Password</Label>
                <Input id="password" type="password" required />
            </div>
            <div class="text-right">
              <a href="/" class="text-sm text-primary hover:underline">
                 Already have an account?
              </a>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button class="w-full">Register</Button>
          </Card.Footer>
        </Card.Root>
  </main>
    
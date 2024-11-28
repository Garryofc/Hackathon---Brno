<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    </script>
  
  <main class="flex items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center w-[100vw] h-[100vh]">
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
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div class="grid gap-2">
                <Label for="password">Confirm Password</Label>
                <Input id="password" type="password" required />
              </div>
          </Card.Content>
          <Card.Footer>
            <Button class="w-full">Register</Button>
          </Card.Footer>
        </Card.Root>
  </main>
    
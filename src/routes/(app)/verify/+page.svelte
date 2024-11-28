<script lang="ts">
  import { PinInput } from "bits-ui";

  let value: string[] | undefined = [];

</script>

<main
	class="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-[url('/landingBG.jpg')] bg-cover bg-center pt-8"
>
	<img src="/Mail_Envilope.png" alt="Mail Envelop" class="mb-[45px]" />
	<div class="mb-20">
		<h1 class="text-center text-4xl font-extrabold md:text-5xl">
			Enter the <span class="relative inline-block text-primary">code</span> we sent to your
			<span class="text-primary">email</span>:
		</h1>
	</div>
    <PinInput.Root
  bind:value
  class="flex items-center gap-2"
  placeholder="0"
>
  <PinInput.Input
    class="flex h-input w-10 select-none rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
  />
  <PinInput.Input
    class="flex h-input w-10 select-none rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
  />
  <PinInput.Input
    class="flex h-input w-10 select-none rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
  />
     - 
  <PinInput.Input
    class="flex h-input w-10 select-none rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
  />
  <PinInput.Input
  class="flex h-input w-10 select-none rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
/>
<PinInput.Input
class="flex h-input w-10 select-none rounded-input border border-foreground bg-background px-2 py-3 text-center font-alt text-[17px] tracking-[0.01em] text-foreground placeholder-shown:border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
/>
  <PinInput.HiddenInput />
</PinInput.Root>

</main>

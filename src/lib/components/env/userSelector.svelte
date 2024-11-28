<script lang="ts">
    import Check from "lucide-svelte/icons/check";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import { tick } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    
    // Updated frameworks with an 'img' field pointing to the image URL
    const frameworks = [ //PULL FROM DB//PULL FROM DB//PULL FROM DB//PULL FROM DB//PULL FROM DB
     {
      value: "user1", //PULL FROM DB
      label: "user1",//PULL FROM DB//PULL FROM DB//PULL FROM DB//PULL FROM DB//PULL FROM DB//PULL FROM DB
      img: "https://vignette.wikia.nocookie.net/peaky-blinders/images/9/93/Tommyportrait2.png/revision/latest?cb=20171106170631"
     },
     {
      value: "user2",
      label: "user2",
      img: "https://vignette.wikia.nocookie.net/peaky-blinders/images/9/93/Tommyportrait2.png/revision/latest?cb=20171106170631"
     },
     {
      value: "user3",
      label: "user3",
      img: "https://vignette.wikia.nocookie.net/peaky-blinders/images/9/93/Tommyportrait2.png/revision/latest?cb=20171106170631"
     }
     
    ];
    
    let open = false;
    let value = "";
    
    $: selectedFramework = frameworks.find((f) => f.value === value);
    $: selectedValue = selectedFramework ? selectedFramework.label : "Select a user...";

    function closeAndFocusTrigger(triggerId: string) {
     open = false;
     tick().then(() => {
      document.getElementById(triggerId)?.focus();
     });
    }
</script>

<Popover.Root bind:open let:ids>
    <Popover.Trigger asChild let:builder>
     <Button
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="w-[200px] justify-between"
     >
      <!-- Display selected value and image -->
      {#if selectedFramework}
        <img src={selectedFramework.img} alt={selectedFramework.label} class="h-6 w-6 rounded-full mr-2" />
        {selectedValue}
      {:else}
        {selectedValue}
      {/if}
      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
     </Button>
    </Popover.Trigger>
    <Popover.Content class="w-[200px] p-0 max-h-[300px] overflow-y-auto">
     <Command.Root>
      <Command.Input placeholder="Search..." />
      <Command.Empty>No user found.</Command.Empty>
      <Command.Group>
       {#each frameworks as framework}
        <Command.Item
         value={framework.value}
         onSelect={(currentValue) => {
          value = currentValue;
          closeAndFocusTrigger(ids.trigger);
         }}
        >
         <Check
          class={cn(
           "mr-2 h-4 w-4",
           value !== framework.value && "text-transparent"
          )}
         />
         <img src={framework.img} alt={framework.label} class="h-6 w-6 rounded-full mr-2" />
         {framework.label}
        </Command.Item>
       {/each}
      </Command.Group>
     </Command.Root>
    </Popover.Content>
</Popover.Root>

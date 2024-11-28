<script lang="ts">
    import Activity from "lucide-svelte/icons/activity";
    import Bar from "$lib/components/env/bar.svelte";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import CircleUser from "lucide-svelte/icons/circle-user";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import DollarSign from "lucide-svelte/icons/dollar-sign";
    import Menu from "lucide-svelte/icons/menu";
    import Package2 from "lucide-svelte/icons/package-2";
    import Search from "lucide-svelte/icons/search";
    import Users from "lucide-svelte/icons/users";
    import Navbar from "$lib/components/env/userSelector.svelte";

  
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import { onMount } from "svelte";
	import { Description } from "formsnap";



    let fullMounted:boolean = false;

  onMount(() => {
    fullMounted = true;
  });
</script>

  {#if fullMounted}
  
  <div class="flex min-h-screen w-full flex-col">
    <nav class="bg-[#ffffff] flex items-center justify-between p-4 border-b border-gray-300">
  
      <div class="flex items-center space-x-6">
        <Navbar />
        <a href="TBA">Overview</a>
        <a href="TBA">Ads</a>
      </div>
      
      <div class="flex items-center space-x-6">
        <div class="bg-[#D9D9D9] p-2 rounded-full w-10 h-10 flex justify-center">
          <i class="bi bi-person-fill text-xl text-gray-700 "></i> 
        </div>
      </div>
      
      
    </nav>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="h-[10vh]">
        Dashboard
        <div>Neco4x</div>

      </div>
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
            <DollarSign class="text-muted-foreground h-4 w-4" />
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">$45,231.89</div>
            <p class="text-muted-foreground text-xs">+20.1% from last month</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
            <Users class="text-muted-foreground h-4 w-4" />
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">+2350</div>
            <p class="text-muted-foreground text-xs">+180.1% from last month</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Sales</Card.Title>
            <CreditCard class="text-muted-foreground h-4 w-4" />
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">+12,234</div>
            <p class="text-muted-foreground text-xs">+19% from last month</p>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Active Now</Card.Title>
            <Activity class="text-muted-foreground h-4 w-4" />
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">+573</div>
            <p class="text-muted-foreground text-xs">+201 since last hour</p>
          </Card.Content>
        </Card.Root>
      </div>
      <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-[repeat(20,1fr)] h-full grow">
        <Card.Root class="col-span-11 flex flex-col justify-between-">
          <Card.Header>
            <Card.Title class="">Monthly sales</Card.Title>
          </Card.Header>
          <Card.Content class="">
            <Bar />
          </Card.Content>
        </Card.Root>

        <Card.Root class="col-span-5">
          <Card.Header>
            <Card.Title>neco</Card.Title>
            <Card.Description>Neco</Card.Description>
          </Card.Header>
          
          
        </Card.Root>

        <Card.Root class="col-span-4">
          <Card.Header>
            <Card.Title>Recent Sales</Card.Title>
            <Card.Description>x sales this month</Card.Description>
          </Card.Header>
          <Card.Content class="gap-8 flex flex-col">  
            {#each Array(7) as _, i} 
            <div class="flex items-center justify-between">
              <div class="">
                <p class="text-sm font-medium leading-none">Product {i+1}</p>
              </div>
              <div class="font-medium text-right">+$1,999.00</div>
            </div>
            {/each}
          </Card.Content>
        </Card.Root>
      </div>
    </main>
  </div>
  {/if}
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
	  import { Content } from "$lib/components/ui/accordion/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import { Label } from "$lib/components/ui/label/index.js";




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
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-[#FFFFFF]">
      <div class="flex flex-col justify-between h-[10vh] px-6">
        <div class="flex items-center justify-between">
          <h1 class="text-4xl font-black">Dashboard</h1>
          
          <div class="flex items-center space-x-4">
            <button class="flex items-center px-4 py-2 bg-white border rounded-md hover:bg-gray-100 transition duration-200">
              <svg class="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
              AB Tests Required
            </button>
      
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
              Run Ads
            </button>
          </div>
        </div>
      
        <Tabs.Root value="month" class="mt-4 w-[20%]">
          <Tabs.List class="grid grid-cols-4 bg-gray-100 rounded-md">
            <Tabs.Trigger 
              value="day" 
              class="px-3 py-1 text-sm rounded-md hover:bg-white transition duration-200">
              Day
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="week" 
              class="px-3 py-1 text-sm rounded-md hover:bg-white transition duration-200">
              Week
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="month" 
              class="px-3 py-1 text-sm rounded-md hover:bg-white transition duration-200">
              Month
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="year" 
              class="px-3 py-1 text-sm rounded-md hover:bg-white transition duration-200">
              Year
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
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
            <Card.Title class="flex items-center justify-between">Favourite products <i class="bi bi-bag"></i> </Card.Title>
            <Card.Description>Top products this month</Card.Description>
          </Card.Header>
          <Card.Content class="gap-5 flex flex-col">  
            <div class="h-[80%]">
              <Card.Root>
                <Card.Header class="flex flex-row items-center p-6 justify-between w-full">
                  <div class="text-center font-black">
                    <bold>35.7%</bold><p class="font-semibold">Product A</p>
                  </div>
                  <div class="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300">
                    Create ad
                  </div>                
                </Card.Header>
              </Card.Root>
              
              {#each Array(4) as _, i} 
              <Card.Root><Card.Header class="flex items-center p-3 justify-between flex-row"><bold>28.7%</bold><p>Product {i}</p></Card.Header></Card.Root>
              {/each}

            </div>
            <div class="flex justify-center">
              <div class="bg-[#4E6BF3] text-center text-white h-full w-[40%] px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300">
                <i class="bi bi-plus-circle-fill"></i>
                Add Product
              </div>
            </div>
            
          </Card.Content>
          
          
        </Card.Root>

        <Card.Root class="col-span-4">
          <Card.Header>
            <Card.Title class="flex items-center justify-between">Recent Sales <i class="bi bi-currency-dollar"></i> </Card.Title>
            <Card.Description>x sales this month</Card.Description>
          </Card.Header>
          <Card.Content class="gap-8 flex flex-col">  
            {#each Array(7) as _, i} 
            <div class="flex items-center justify-between">
              <div class="">
                <p class="text-sm font-medium leading-none">Product {i+1}</p>
              </div>
              <div class="font-medium text-right">$1,999.00</div>
            </div>
            {/each}
          </Card.Content>
        </Card.Root>
      </div>
    </main>
  </div>
  {/if}
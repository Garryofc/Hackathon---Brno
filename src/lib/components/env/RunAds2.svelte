<script>
	import Button from "../ui/button/button.svelte";
    // import Bar from '$lib/components/env/bar.svelte';
    // import * as Card from '$lib/components/ui/card/index.js';
    // import * as Icon from 'lucide-svelte';
    // import { onMount } from 'svelte';
    import * as Tabs from '$lib/components/ui/tabs/index.ts';

</script>
<div class="w-[100vw] h-[100vh] z-50 bg-black bg-opacity-15 absolute top-0 left-0 shadow-lg">
    <div class="w-2/3 h-3/4 absolute bg-gray-200 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col gap-8 items-center justify-center">

        <div class="flex gap-8 w-[90%]">
            <div class="w-4/12">
                <img src="/skincare-beauty-branding.jpg" alt="">
            </div>
            <div class="w-8/12">
                <input type="text" value="✨ Your Beauty, Our Passion ✨" class="font-semibold w-full mb-2 p-2 pl-4 border border-gray-300 rounded-md bg-white" />
                <textarea rows="7" class="w-full p-2 pl-4 border border-gray-300 rounded-md bg-white">Unleash your natural glow with Beautify! From hydrating skincare to stunning makeup essentials, we’ve crafted everything you need to feel confident and radiant every day. 🌸
🌟 Cruelty-free
🌟 Made with Love
🌟 Perfect for Every Skin Type
Because you deserve the best version of you! 💕</textarea>
                <div class="flex w-full gap-2">
                    <input type="text" value="Glow Like Never Before!" class="font-semibold w-9/12 p-2 pl-4 border border-gray-300 rounded-md bg-white" />
                    <Button class="w-3/12"><i class="bi bi-arrow-return-left"></i></Button>
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-slate-300"></div>
        <div class="flex justify-start w-[90%] gap-16">
            <h1 class="text-center text-4xl font-extrabold md:text-5xl">
                <span class="relative inline-block text-primary">
                    Campaign 1
                    <img
                        class="absolute bottom-0 left-0 h-fit w-full translate-y-[53%]"
                        src="/underline.png"
                        alt="underline"
                    />
                </span>
            </h1>
            <div class="mt-2 py-2 flex text-center justify-center items-center bg-white rounded-md px-6 text-[#4E6BF3] border-[#4E6BF3] border-2 font-bold">
                <p>Product X</p>
            </div>
            <!-- <Button>Product X</Button> -->
        </div>
        <div class="flex gap-8 justify-evenly w-[90%]">
            <div class="w-[33.3%] flex flex-col gap-3">
                <div class="flex justify-between">
                    <h3 class="text-2xl font-semibold">Age</h3>
                    <p class="text-xl text-gray-500">18-35</p>
                </div>
                <div class="relative mt-4">
                    <div class="h-1 bg-white rounded absolute inset-0"></div>
                    <input type="range" min="0" max="100" value="25" id="slider1" 
                           class="absolute appearance-none w-full h-1 bg-transparent pointer-events-none z-10">
                    <input type="range" min="0" max="100" value="75" id="slider2" 
                           class="absolute appearance-none w-full h-1 bg-transparent pointer-events-none z-10">
                    <div id="track" class="h-1 bg-gray-700 rounded absolute top-0 left-1/4 right-1/4"></div>
                </div>
            </div>
            <div class="w-[33.3%] flex flex-col gap-3">
                <div class="flex justify-between">
                    <h3 class="text-2xl font-semibold">Gender</h3>
                    <p></p>
                </div>
                <div>
                    <Tabs.Root value="month" class="w-full">
                        <Tabs.List class="flex gap-1 rounded-md bg-gray-100 px-1.5 justify-around">
                            <Tabs.Trigger value="Male" class="rounded-sm px-5 py-1 text-sm transition duration-200 hover:bg-white">Male</Tabs.Trigger>
                            <Tabs.Trigger value="Female" class="rounded-sm px-5 py-1 text-sm transition duration-200 hover:bg-white">Female</Tabs.Trigger>
                            <Tabs.Trigger value="Both" class="rounded-sm px-5 py-1 text-sm transition duration-200 hover:bg-white">Both</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </div>
            </div>
            <div class="w-[33.3%] flex flex-col gap-3">
                <div class="flex justify-between">
                    <h3 class="text-2xl font-semibold">Location</h3>
                    <p></p>
                </div>
                <div>
                    <p>Prague, Brno, Ostrava</p>
                </div>
            </div>
        </div>
        <div class="w-[90%]">
            <Button class="text-xl p-7 ml-[85%]">Run ad</Button>
        </div>

        <!-- <h1 class="text-5xl text-center font-extrabold">Create <span class="text-primary">ads</span> with <span class="text-primary">just</span> a product link.</h1> -->
        <!-- <div class="w-1/3 mb-10 flex gap-2">
            <input type="text" placeholder="Enter product link" class="w-4/5 p-2 pl-4 border border-gray-300 rounded-md bg-white" />
            <Button class="w-1/5"><i class="bi bi-arrow-return-left"></i></Button>
        </div> -->
    </div>
</div>
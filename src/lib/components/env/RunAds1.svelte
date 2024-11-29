<script>
	import Button from "../ui/button/button.svelte";

</script>
<div class="w-[100vw] h-[100vh] z-50 bg-black bg-opacity-15 absolute top-0 left-0 shadow-lg">
    <div class="w-2/3 h-3/4 absolute bg-[url('/landingBG.jpg')] bg-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col gap-8 items-center justify-center">
        <h1 class="text-5xl text-center font-extrabold">Create <span class="text-primary">ads</span> with <span class="text-primary">just</span> a product link.</h1>
        <div class="w-1/3 mb-10 flex gap-2">
            <input type="text" placeholder="Enter product link" class="w-4/5 p-2 pl-4 border border-gray-300 rounded-md bg-white" />
            <Button class="w-1/5"><i class="bi bi-arrow-return-left"></i></Button>
        </div>
    </div>
</div>
<script>
    import UserSelector from '$lib/components/env/userSelector.svelte';
</script>

<nav class="bg-[#ffffff] flex items-center justify-between p-4 border-b border-gray-300">
  
  <!-- Left side: UserSelector and other elements -->
  <div class="flex items-center space-x-6">
    <UserSelector />
    <a href="TBA">Overview</a>
    <a href="TBA">Ads</a>
  </div>
  
  <div class="flex items-center space-x-6">
    <div class="bg-[#D9D9D9] p-2 rounded-full w-10 h-10 flex justify-center">
      <i class="bi bi-person-fill text-xl text-gray-700 "></i> 
    </div>
  </div>
  
  
</nav>

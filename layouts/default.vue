<template>
    <div class="flex">
       <div class="w-64 bg-gray-800">
            <Navbar />
       </div>
       <div class="flex-grow">
            <NuxtPage />
       </div>
    </div>
</template>

<script>
   import Navbar from '@/components/Navbar.vue'
   
   export default {
    components: {
       Navbar
    }
   }
</script>
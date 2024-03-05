<template>
  <nav class="bg-gray-800 h-screen pt-6">
     <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
       <div class="relative flex items-center justify-between h-16">
         <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start flex-wrap">
           <div class="flex-shrink-0 flex items-center w-full">
             <h1 class="text-2xl text-white mb-6">ACME</h1>
           </div>
           <div class="hidden sm:block ">
             <div class="flex space-x-4">
               <NuxtLink to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Tarefas</NuxtLink>
             </div>
           </div>
         </div>
       </div>
     </div>
  </nav>
 </template>
 
 <script setup lang="ts">
  import { defineComponent } from 'vue'
  

 </script>
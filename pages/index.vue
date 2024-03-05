<template>
    <div class="p-4">
      <router-link 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/tarefa">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Adicionar Tarefa
      </router-link>
    </div>
    <div class="p-4">
      <table v-if="tasks.length > 0" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="task in tasks" :key="task.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ task.title }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ task.description }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <NuxtLink :to="`/tarefa/${task.id}`" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</NuxtLink>
              <button @click="removeTask(task.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-6">Deletar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
   
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useTasksStore } from "~/store/tasks";

  const tasksStore = useTasksStore();
  const { removeTask, fetchTasks } = tasksStore;
  const { tasks } = storeToRefs(tasksStore);

  onMounted(async () => {
    if(tasks.value.length === 0) {
      await fetchTasks();
    }
  });

  </script>
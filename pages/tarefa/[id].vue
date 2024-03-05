<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div class="md:flex">
            <div class="p-8">
                <h1 class="text-2xl font-bold text-gray-900">Adicionar Tarefa</h1>
                <form @submit.prevent="addTask" class="mt-4">
                    <div class="mb-4">
                        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                        <input type="text" id="title" v-model="newTask.title" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Digite o título da tarefa">
                    </div>
                    <div class="mb-4">
                        <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Descrição:</label>
                        <textarea id="description" v-model="newTask.description" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Digite a descrição da tarefa"></textarea>
                    </div>
                    <div class="mb-4">
                        <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                        <select id="status" v-model="newTask.status" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="active" class="block text-gray-700 text-sm font-bold mb-2">Ativo:</label>
                        <input type="checkbox" id="active" v-model="newTask.active" class="form-checkbox h-5 w-5 text-blue-600">
                    </div>
                    <div class="mb-4">
                        <label for="order" class="block text-gray-700 text-sm font-bold mb-2">Ordem:</label>
                        <input type="number" id="order" v-model="newTask.order" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Digite a ordem da tarefa">
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Adicionar Tarefa</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
   import { ref } from 'vue';
   import { useTasksStore } from '~/store/tasks';
   import { StatusEnum } from '~/enum/status';
   import { useRouter } from 'vue-router';
   import { v4 as uuidv4 } from 'uuid';

   const route = useRoute();
   const tasksStore = useTasksStore();
   const { fetchTasks } = tasksStore;
   const router = useRouter();

   const newTask = ref({
      title: '',
      description: '',
      status: StatusEnum.High,
      active: false,
      order: 0,
   });

   const statuses = Object.values(StatusEnum);

   const addTask = () => {
    if (newTask.value.title.trim() && newTask.value.description.trim()) {
            const taskWithId = { ...newTask.value, id: uuidv4() };
            tasksStore.addTask(taskWithId);

            newTask.value = { title: '', description: '', status: StatusEnum.High, active: false, order: 0 };
            router.push('/');
    }
   };

   onMounted(async () => {
        await fetchTasks();
        const taskId = route.params.id; // Obter o ID da tarefa da URL
        const task = tasksStore.getTaskById(taskId);
        if (task) {
            newTask.value = task; // Preencher os campos do formulário com os dados da tarefa
        }
   });
</script>
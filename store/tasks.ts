import { defineStore } from 'pinia';
import type { Task } from '~/types/tasks';

export const useTasksStore = defineStore('tasks', {
 state: () => ({
    tasks: [] as Task[],
 }),
 actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    getTaskById(id: string): Task | undefined {
      return this.tasks.find(task => task.id === id);
    },
    async fetchTasks() {
        try {
          const response = await fetch('/api/tasks');
          if (!response.ok) {
            throw new Error('Erro ao buscar tarefas');
          }
          const data = await response.json();
          this.tasks = data;
        } catch (error) {
          console.error('Erro ao buscar tarefas:', error);
        }
      },
 },
});
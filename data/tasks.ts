import type { Task } from '@/types/tasks';
import { StatusEnum } from '~/enum/status';

export const tasks: Task[] = [
 {
    id: 'ccf93f4b-3a86-4913-b6f5-ba8b69ed69e8',
    title: 'Tarefa 1',
    description: 'Descrição da Tarefa 1',
    order: 1,
    active: true,
    status: StatusEnum.High,
    updated_at: new Date(),
    created_at: new Date(),
 },
 {
    id: '6bc305a2-13ff-4890-b88b-b49a0f30d172',
    title: 'Tarefa 2',
    description: 'Descrição da Tarefa 2',
    order: 2,
    active: true,
    status: StatusEnum.Medium,
    updated_at: new Date(),
    created_at: new Date(),
 },
 {
    id: '6bbc6232-3fa1-496f-8237-3b46c3e1be06',
    title: 'Tarefa 3',
    description: 'Descrição da Tarefa 3',
    order: 3,
    active: true,
    status: StatusEnum.Low,
    updated_at: new Date(),
    created_at: new Date(),
 }
];
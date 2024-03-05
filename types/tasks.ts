import type { StatusEnum } from "~/enum/status";

export interface Task {
    id: string;
    title: string;
    description: string;
    order: number;
    active: boolean;
    status: StatusEnum;
    updated_at: Date;
    created_at: Date;
}
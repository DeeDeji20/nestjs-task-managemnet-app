import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TaskService {

    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task=>task.id === id)
    }

    createTask(CreateTaskDto: CreateTaskDto): Task {
        const { title, description} = CreateTaskDto;
        let val =1;
        if(this.tasks.length > 0) {
            val++;
        }
        const task: Task = { id: JSON.stringify(val), title, description, satus: TaskStatus.OPEN};

        this.tasks.push(task);
        return task;
    }

    deleteTaskBy(id: string): void{
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}

import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { FilterTask } from './dto/filter-task.dto';

@Injectable()
export class TaskService {

    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksByFilter(filterTaskDto: FilterTask): Task[] {
        const { status, search } = filterTaskDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter(task=>task.status===status);
        }
        if(search) {
            tasks = tasks.filter(task=>
                task.title.includes(search) ||
                   task.description.includes(search));
        }
        
        return tasks;
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
        const task: Task = { id: JSON.stringify(val), title, description, status: TaskStatus.OPEN};

        this.tasks.push(task);
        return task;
    }

    deleteTaskBy(id: string): void{
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        console.log(id, status);
        
        task.status = status;
        return task;
    }
}

import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(CreateTaskDto: CreateTaskDto): Task {
        const { title, description} = CreateTaskDto;
        let val =1;
        if(this.tasks.length > 0) {
            val++;
        }
        console.log("here logging::::: "+val);
        
        const task: Task = { id: JSON.stringify(val), title, description, satus: TaskStatus.OPEN};

        this.tasks.push(task);
        return task;
    }
}

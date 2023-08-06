import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: String, description: String): Task {
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

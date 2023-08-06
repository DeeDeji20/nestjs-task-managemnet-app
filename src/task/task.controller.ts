import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Controller('task')
export class TaskController {
    // Constructor injection
    constructor(private taskService: TaskService){}

    @Get()
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto)
    }
}

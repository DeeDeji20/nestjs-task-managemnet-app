import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { FilterTask } from './dto/filter-task.dto';

@Controller('task')
export class TaskController {
    // Constructor injection
    constructor(private taskService: TaskService){}

    @Get()
    getTasks(@Query() filterTaskDto: FilterTask): Task[] {
        if(Object.keys(filterTaskDto).length > 0){
            return this.taskService.getTasksByFilter(filterTaskDto)
        }
        else return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param("id") id: string): Task {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto)
    }

    @Delete('/:id')
    deleteTaskById(@Param("id") id: string): void {
        return this.taskService.deleteTaskBy(id)
    }   

    @Patch('/:id/status')
    updateTaskStatus(@Param("id") id: string, @Body("status") status:TaskStatus): Task {
        return this.taskService.updateTaskStatus(id, status);
    }

}

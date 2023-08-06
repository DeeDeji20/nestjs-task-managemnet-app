import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { UserController } from './user/user.controller';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [TaskModule, UserModule],
  controllers: [AppController, TaskController, UserController],
  providers: [AppService, TaskService],
})
export class AppModule {}

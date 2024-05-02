import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './Tasks/tasks.module';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, ProjectModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

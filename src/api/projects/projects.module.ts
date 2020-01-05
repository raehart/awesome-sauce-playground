import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';


@Module({
    controllers: [ProjectsController],
    providers: [ProjectsService, ProjectsResolver],
    exports: [ProjectsService]
})
export class ProjectsModule {}
import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';


@Controller('api/projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  async getProjects() {
    return await this.projectsService.getProjects();
  }
}
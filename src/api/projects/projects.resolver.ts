import { Resolver } from '@nestjs/graphql';
import { Project } from './models/project';
import { ProjectsService } from './projects.service';
import { Query } from 'type-graphql';

@Resolver(of => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(returns => [Project])
  projects(): Promise<Project[]> {
    return this.projectsService.getProjects();
  }
}
import { Injectable } from '@nestjs/common';
import { PROJECTS } from './projects.mock';



@Injectable()
export class ProjectsService {
  projects = PROJECTS;

  getProjects(): Promise<any> {
    return new Promise(resolve => {
        resolve(this.projects);
    });
  }

}

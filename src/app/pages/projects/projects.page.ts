import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ProjectsComponent } from '../../features/projects/projects.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [PageHeaderComponent, ProjectsComponent],
  template: `
    <app-page-header
      title="Projects"
      sub="Business-based technology solutions deployed across diverse industries."
      [dark]="true">
    </app-page-header>
    <app-projects></app-projects>
  `
})
export class ProjectsPage {}

import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { ValuesComponent } from '../../features/values/values.component';
import { ServicesComponent } from '../../features/services/services.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ValuesComponent, ServicesComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-values></app-values>
    <app-services></app-services>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `
})
export class HomePage {}

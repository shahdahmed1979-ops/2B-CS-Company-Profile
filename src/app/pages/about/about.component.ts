import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { AboutComponent } from '../../features/about/about.component';
import { ValuesComponent } from '../../features/values/values.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [PageHeaderComponent, AboutComponent, ValuesComponent],
  template: `
    <app-page-header
      title="About Us"
      sub="One of the largest retail and distribution companies in the region — now bringing that experience to the cloud.">
    </app-page-header>
    <app-about></app-about>
    <app-values></app-values>
  `
})
export class AboutPageComponent {}

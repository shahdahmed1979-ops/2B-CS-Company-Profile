import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ServicesComponent } from '../../features/services/services.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [PageHeaderComponent, ServicesComponent],
  template: `
    <app-page-header
      title="Our Services"
      sub="Enterprise-grade ERP, HR, web, and mobile solutions tailored to your industry.">
    </app-page-header>
    <app-services></app-services>
  `
})
export class ServicesPage {}

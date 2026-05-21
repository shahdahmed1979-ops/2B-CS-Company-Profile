import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [PageHeaderComponent, ContactComponent],
  template: `
    <app-page-header
      title="Contact Us"
      sub="Give us a call, drop us an email, or use the form below. We'll get back to you shortly.">
    </app-page-header>
    <app-contact></app-contact>
  `
})
export class ContactPage {}

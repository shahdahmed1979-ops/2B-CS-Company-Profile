import { Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {

  form: FormGroup;
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  constructor(private fb: FormBuilder, private contactSvc: ContactService) {
    this.form = this.fb.group({
      name:        ['', Validators.required],
      mobile:      ['', Validators.required],
      jobTitle:    ['', Validators.required],
      email:       ['', [Validators.required, Validators.email]],
      company:     ['', Validators.required],
      companySize: ['', Validators.required],
      country:     ['', Validators.required],
      service:     [''],
      comments:    ['']
    });
  }

  ngAfterViewInit() {
    gsap.from('.contact-left > *', {
      scrollTrigger: { trigger: '.contact', start: 'top 75%' },
      opacity: 0, x: -40, duration: 0.9, stagger: 0.12, ease: 'power3.out'
    });
    gsap.from('.cf', {
      scrollTrigger: { trigger: '.contact-grid', start: 'top 75%' },
      opacity: 0, x: 40, duration: 1, ease: 'power3.out'
    });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('sending');
    this.contactSvc.submit(this.form.value).subscribe({
      next: () => {
        this.status.set('success');
        this.form.reset();
        setTimeout(() => this.status.set('idle'), 4000);
      },
      error: () => {
        this.status.set('error');
        setTimeout(() => this.status.set('idle'), 3000);
      }
    });
  }

  isInvalid(field: string) {
    const c = this.form.get(field);
    return c?.invalid && c?.touched;
  }
}

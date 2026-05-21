import { Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Service {
  num: string;
  tag: string;
  heading: string;
  desc: string;
  visual: string;
  stats: Array<{ val: string; label: string }>;
  barColor: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {

  active = signal(0);

  services: Service[] = [
    {
      num: '01', tag: 'ERP Systems',
      heading: 'Drive growth, cut cost & scale',
      desc: 'We deploy ERP systems that automate, unify data, and adapt to your industry\'s needs.',
      visual: 'ERP DASHBOARD',
      stats: [{ val: '2.4M', label: 'Revenue' }, { val: '98%', label: 'Efficiency' }, { val: '340', label: 'Processes' }],
      barColor: '#f37021'
    },
    {
      num: '02', tag: 'NAS HR Software',
      heading: 'A Seamless All-in-One HR App',
      desc: 'Manage all HR functions effortlessly in one platform, ensuring smooth operations for both employees and managers.',
      visual: 'HR PORTAL',
      stats: [{ val: '312', label: 'Employees' }, { val: '94%', label: 'Attendance' }, { val: '28', label: 'Requests' }],
      barColor: '#00613e'
    },
    {
      num: '03', tag: 'Web Development',
      heading: 'Secure, Fast & SEO-Optimized',
      desc: 'We build scalable, modern, and high-performance websites tailored to your business goals.',
      visual: 'WEB PROJECT',
      stats: [{ val: '100', label: 'SEO Score' }, { val: '1.2s', label: 'Load Time' }, { val: 'A+', label: 'Security' }],
      barColor: '#1d6fa5'
    },
    {
      num: '04', tag: 'Mobile App Development',
      heading: 'Build your unique mobile app',
      desc: 'We create intuitive, high-performance mobile applications with seamless user experiences for iOS & Android.',
      visual: 'MOBILE APP',
      stats: [{ val: '4.9★', label: 'Rating' }, { val: 'iOS+', label: 'Android' }, { val: '50K+', label: 'Downloads' }],
      barColor: '#8b4ca0'
    }
  ];

  bars = [40, 65, 52, 84, 70, 90, 76];

  setActive(i: number) {
    this.active.set(i);
    gsap.to('.srv-preview-card', { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1 });
  }

  ngAfterViewInit() {
    gsap.from('.srv-head > *', {
      scrollTrigger: { trigger: '.services', start: 'top 75%' },
      opacity: 0, y: 30, duration: 0.8, stagger: 0.12, ease: 'power3.out'
    });
    gsap.from('.srv-preview', {
      scrollTrigger: { trigger: '.srv-grid', start: 'top 80%' },
      opacity: 0, x: -50, duration: 1, ease: 'power3.out'
    });
    gsap.from('.srv-item', {
      scrollTrigger: { trigger: '.srv-list', start: 'top 80%' },
      opacity: 0, x: 50, duration: 0.8, stagger: 0.1, ease: 'power3.out'
    });
  }
}

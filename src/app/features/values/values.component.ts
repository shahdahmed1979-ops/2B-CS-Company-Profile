import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent implements AfterViewInit {

  values = [
    {
      icon: 'eye',
      title: 'Vision',
      text: 'To transform businesses and embrace the future with flexibility, cloud benefits, real-time insights, affordability and enhanced security.'
    },
    {
      icon: 'target',
      title: 'Mission',
      text: 'To Build Cloud Solutions empowering business and people while creating lasting Valued Partnerships.'
    },
    {
      icon: 'zap',
      title: 'Goal',
      text: 'Empowering businesses with enhanced results by delivering a single solution for the whole business to ensure tracking of processes, data and business insights.'
    }
  ];

  ngAfterViewInit() {
    gsap.from('.values-head > *', {
      scrollTrigger: { trigger: '.values', start: 'top 75%' },
      opacity: 0, y: 30, duration: 0.8, stagger: 0.12, ease: 'power3.out'
    });
    gsap.from('.val-card', {
      scrollTrigger: { trigger: '.values-grid', start: 'top 80%' },
      opacity: 0, y: 50, duration: 0.9, stagger: 0.1, ease: 'power3.out'
    });
  }
}

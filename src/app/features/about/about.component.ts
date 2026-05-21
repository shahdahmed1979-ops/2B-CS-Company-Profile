import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Text reveals
    gsap.from('.about-left > *', {
      scrollTrigger: { trigger: '.about', start: 'top 75%' },
      opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: 'power3.out'
    });

    // Floating cards stagger
    gsap.from('.fc', {
      scrollTrigger: { trigger: '.about-cards', start: 'top 80%' },
      opacity: 0, y: 60, duration: 1, stagger: 0.12, ease: 'power3.out'
    });

    // Independent float animations
    const cards = document.querySelectorAll('.fc');
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -12 - i * 3,
        duration: 4 + i * 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5
      });
    });
  }
}

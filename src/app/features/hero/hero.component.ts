import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  ngAfterViewInit() {
    this.initParticles();
    this.initAnimations();
  }

  private initAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-left', { opacity: 0, x: -50, duration: 1, delay: 0.2 })
      .from('.hero-center', { opacity: 0, y: 60, duration: 1 }, '-=0.7')
      .from('.hero-right', { opacity: 0, x: 50, duration: 1 }, '-=0.8')
      .from('.scroll-ind', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3');
  }

  private initParticles() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{x:number,y:number,size:number,speed:number,opacity:number}> = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.5 + Math.random() * 1.5,
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.1 + Math.random() * 0.4
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243,112,33,${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
      });
      requestAnimationFrame(animate);
    };
    animate();
  }
}

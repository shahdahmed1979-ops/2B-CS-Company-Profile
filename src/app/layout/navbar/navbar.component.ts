import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  navigate(path: string) {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
    this.router.navigate([path]);
  }

  isActive(path: string): boolean {
    if (path === '/') return this.router.url === '/' || this.router.url === '';
    return this.router.url.startsWith(path);
  }

  toggleMenu() {
    const open = !this.menuOpen();
    this.menuOpen.set(open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() sub = '';
  @Input() dark = false;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}

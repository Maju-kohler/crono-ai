import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './app-landing.component.html',
  styleUrl: './app-landing.component.scss'
})
export class AppLandingComponent {
  title = 'Crono-ai';

  constructor(private router: Router) { }

  onClick(direc: string) {
    this.router.navigate([direc]);
  }

}

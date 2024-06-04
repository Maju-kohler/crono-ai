import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss'
})
export class AppButtonComponent {

  constructor(private router: Router) { }

  onClick(direc: string) {
    this.router.navigate([direc]);
    
  }

  @Input() buttonText: string = '';
  @Input() buttonType: string = 'primary';
}

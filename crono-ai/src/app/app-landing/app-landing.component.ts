import { Component } from '@angular/core';
import { AppButtonComponent } from '../app-button/app-button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './app-landing.component.html',
  styleUrl: './app-landing.component.scss'
})
export class AppLandingComponent {
  title = 'Crono-ai';


}

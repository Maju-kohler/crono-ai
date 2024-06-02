import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLandingComponent } from './app-landing/app-landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crono-ai';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-menu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-schedule-menu.component.html',
  styleUrl: './app-schedule-menu.component.scss'
})
export class AppScheduleMenuComponent {
  constructor(private router: Router){ }

  onCancel(){
    this.router.navigate(['/']);
  }
  
  onImport(){
    //Import tasks using Calendar API
    this.router.navigate(['/']);
  }
}

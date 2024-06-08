import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.scss'
})
export class AppFormComponent {
  scheduleName: string = '';
  objective: string = '';
  timePerDay: string = ''; //verificar se vai precisar ser string ou number
  calendarData1: Date | undefined;
  calendarData2: Date | undefined;

  constructor (private router: Router) {}

  onCancel(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.router.navigate(['/schedule-menu']);
    //add behavior too generate schedule
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-keys',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-api-keys.component.html',
  styleUrl: './app-api-keys.component.scss'
})
export class AppApiKeysComponent {
  geminiAPI: string = '';
  calendarAPI: string = '';

  constructor(private router: Router){ }

  onCancel(){
    this.router.navigate(['/']);
  }
  
  onSave(){
    //Save inputs to variables
    this.router.navigate(['/']);
  }
}

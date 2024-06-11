import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppFormComponent } from '../app-form/app-form.component';

interface Task {
  day: string;
  task: string;
}

@Component({
  selector: 'app-schedule-menu',
  standalone: true,
  imports: [FormsModule, CommonModule, AppFormComponent],
  templateUrl: './app-schedule-menu.component.html',
  styleUrl: './app-schedule-menu.component.scss'
})
export class AppScheduleMenuComponent {
  @Input() data: any;

  tasks: Task[] = [];

  constructor(private router: Router){ 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {data: { day: string, task: string }[] };
    if (state && state.data) {
      this.tasks = state.data
    }
  }

  ngOnInit(): void {}

  onCancel(){
    this.router.navigate(['/']);
  }
  
  onImport(){
    this.router.navigate(['/']);
  }

  leftScroll() {
    const left = document.querySelector(".scroll-cards");
    left?.scrollBy(-200, 0);
  }

  rightScroll() {
    const right = document.querySelector(".scroll-cards");
    right?.scrollBy(200, 0);
  }
}



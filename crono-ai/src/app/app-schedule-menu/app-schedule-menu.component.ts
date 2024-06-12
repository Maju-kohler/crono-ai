import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppFormComponent } from '../app-form/app-form.component';
import { ScheduleService } from '../schedule.service';

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
  
  scheduleName: string = '';
  tasks: Task[] = [];
  tempTasks: Task[] = [];
  isEditing: boolean[] = [];

  constructor(private router: Router, private scheduleService: ScheduleService){ 
    // const navigation = this.router.getCurrentNavigation();
    // const state = navigation?.extras.state as {data: { day: string, task: string }[] };
    // if (state && state.data) {
    //   this.tasks = state.data
    // }
  }

  ngOnInit(): void {
    this.scheduleService.scheduleName$.subscribe(name => {
      this.scheduleName = name;
    });
  
    this.tasks = this.scheduleService.getTasks();
    this.tempTasks = JSON.parse(JSON.stringify(this.tasks));
    this.isEditing = new Array(this.tasks.length).fill(false);
  }

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

  enableEditing(index: number) {
    this.isEditing[index] = true;
  }

  saveTask(index: number, updatedTask: {day: string , task: string}) {
    this.scheduleService.updateTask(index, updatedTask);
    this.tasks[index] = updatedTask;
    this.tempTasks[index] = JSON.parse(JSON.stringify(updatedTask)); //Test this tomorrow!
    this.isEditing[index] = false;
  }

  cancelEditing(index: number){
    this.tasks[index] = this.tempTasks[index];
    this.isEditing[index] = false;
  }

  deleteTask(index: number){
    this.scheduleService.deleteTask(index);
    this.tasks = this.scheduleService.getTasks();
    this.tempTasks.splice(index, 1);
    this.isEditing.splice(index, 1);
  }
}



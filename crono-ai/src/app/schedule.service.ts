import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private tasks: {day: string, task: string }[] = [];
  private scheduleNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public scheduleName$: Observable<string> = this.scheduleNameSubject.asObservable();
  
  setScheduleName(name: string): void {
    this.scheduleNameSubject.next(name);
  }

  setTasks(tasks: {day: string, task: string }[]){
    console.log('entrou no setTasks');
    this.tasks = tasks;
  }

  getTasks(): {day: string, task: string }[] {
    console.log('entrou no getTasks');
    console.log('this.tasks: ' + this.tasks)
    return this.tasks;
  }

  updateTask(index: number, updatedTask: {day: string, task: string }){
    this.tasks[index] = updatedTask;
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
}

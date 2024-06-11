import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private scheduleNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public scheduleName$: Observable<string> = this.scheduleNameSubject.asObservable();

  constructor() { }
  
  setScheduleName(name: string): void {
    this.scheduleNameSubject.next(name);
  }
}

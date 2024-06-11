import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  private apiKeySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public apiKey$: Observable<string> = this.apiKeySubject.asObservable();

  constructor() { }
  
  setApiKey(name: string): void {
    this.apiKeySubject.next(name);
  }
}

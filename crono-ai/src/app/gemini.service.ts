import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenerateContentResponse } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private baseUrl = 'http://localhost:3000/generate-text';

  constructor(private http: HttpClient) { }
  generateText(prompt: string, temperature?: number, maxTokens?: number): Observable<GenerateContentResponse> {
    const body = {
      prompt,
      temperature: temperature || 0.7,
      max_tokens: maxTokens || 128,
    };
    return this.http.post<GenerateContentResponse>(this.baseUrl, body);
  }
}

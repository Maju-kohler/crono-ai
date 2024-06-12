import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai'

import { environment } from '../../environments/environment.development';
import { ScheduleService } from '../schedule.service';
import { ApiKeyService } from '../api-key.service';

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
  calendarData1: Date | undefined = new Date("01-01-2024");
  calendarData2: Date | undefined = new Date("01-01-2024");

  tasksArray: {day: string, task: string} [] = []

  geminiKey: string = '';
  genAI: GoogleGenerativeAI | undefined;

  constructor (
    private router: Router, 
    private scheduleService: ScheduleService, 
    private apiKeyService: ApiKeyService
  ) {}

  ngOnInit():void {
    this.apiKeyService.apiKey$.subscribe(name => {
      this.geminiKey = name;
    });
  }

  async TestGeminiPro(){
    //Gemini client
  if(!this.geminiKey){
    console.error('API key is not available');
    alert('API key is not available');
    return;
  }

    //const genAI = new GoogleGenerativeAI(environment.API_KEY);
    this.genAI = new GoogleGenerativeAI(this.geminiKey);

    const generationConfig = {
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
      maxOutputTokens: 100,
    };
    const model = this.genAI.getGenerativeModel({
      model: 'gemini-pro',
      ...generationConfig,
    });

    const prompt = `Write a schedule about ${ this.objective }, starting from ${ this.calendarData1 } to ${ this.calendarData2 }.  Consider that the tasks shall be executed in ${ this.timePerDay } hours each day. Write it in JSON format, single line and without markdown formatting, following the model [{"day": day in DD-MM-YYYY format, "task": task to be done }].`;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    //const response = `[{"day": "11-06-2024", "task": "Research and gather information about France's history"}, {"day": "12-06-2024", "task": "Outline the essay structure and write the introduction"}, {"day": "13-06-2024", "task": "Write the body paragraphs covering key historical events and periods"}, {"day": "14-06-2024", "task": "Write the conclusion and revise and edit the essay"}]`

    try {
      const parsedResponse = JSON.parse(response.text());
      //const parsedResponse = JSON.parse(response);

      if (Array.isArray(parsedResponse)) {
        for (const item of parsedResponse) {
          if (!item.hasOwnProperty('day') || !item.hasOwnProperty('task')) {
            throw new Error('Invalid JSON structure');
          }
        }
        return parsedResponse;
      } else {
        throw new Error('Invalid JSON structure');
      }
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return [];
    }
  }


  onCancel(){
    this.router.navigate(['/']);
  }

  async onSubmit(){
    this.scheduleService.setScheduleName(this.scheduleName);
    const finalAnswer = await this.TestGeminiPro();
    if(finalAnswer){
    this.scheduleService.setTasks(finalAnswer);
    this.router.navigate(['/schedule-menu']);
    }
    //this.router.navigate(['/schedule-menu'], {state: {data: finalAnswer}});
  }
}

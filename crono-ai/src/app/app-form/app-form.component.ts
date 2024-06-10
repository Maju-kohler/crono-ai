import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai'
import { environment } from '../../environments/environment.development';


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

  constructor (private router: Router) {}

  // async generate(){
  //   try{
  //     const response = this.geminiService.generateText(this.prompt);
  //   }catch (error) {
  //     console.log(error);
  //   }
  // }

  async TestGeminiPro(){
    //Gemini client
    const genAI = new GoogleGenerativeAI(environment.API_KEY);
    const generationConfig = {
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
      maxOutputTokens: 100,
    };
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
      ...generationConfig,
    });

    const prompt = `Write a schedule about ${ this.objective }, starting from ${ this.calendarData1 } to ${ this.calendarData2 }.  Consider that the tasks shall be executed in ${ this.timePerDay } hours each day. Write it in JSON format, splitting between 'day' (DD-MM-YYYY format) and one 'task'.`;
    //const result = await model.generateContent(prompt);
    //const response = await result.response;
    const response = `json
{
  "schedule": [
    {
      "day": "10-06-2024",
      "task": "Introduction to knitting and materials"
    },
    {
      "day": "11-06-2024",
      "task": "Learning the knit stitch"
    },
    {
      "day": "12-06-2024",
      "task": "Learning the purl stitch"
    },
    {
      "day": "13-06-2024",
      "task": "Practicing basic knitting patterns"
    },
    {
      "day": "14-06-2024",
      "task": "Casting off and finishing techniques"
    }
  ]
}
`
    //console.log(response.text());
    console.log(response);
  }

  onCancel(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.router.navigate(['/schedule-menu']);
    this.TestGeminiPro();
  }
}

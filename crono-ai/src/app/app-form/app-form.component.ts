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
  timePerDay: string = '1'; //verificar se vai precisar ser string ou number
  calendarData1: Date | undefined = new Date("01-01-2024");
  calendarData2: Date | undefined = new Date("01-01-2024");

  tasksArray: {day: string, task: string} [] = []

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

    const prompt = `Write a schedule about ${ this.objective }, starting from ${ this.calendarData1 } to ${ this.calendarData2 }.  Consider that the tasks shall be executed in ${ this.timePerDay } hours each day. Write it in JSON format, following the model [{"day": day in DD-MM-YYYY format, "task": task to be done }].`;
    // const result = await model.generateContent(prompt);
    // const response = await result.response;
    const response = `json
    [{
      "day": "10-06-2024",
      "task": "Introduction to coding concepts and programming languages (3 hours)"
    },
    {
      "day": "11-06-2024",
      "task": "Learn the basics of Python syntax and data types (3 hours)"
    },
    {
      "day": "12-06-2024",
      "task": "Practice writing simple Python programs (3 hours)"
    },
    {
      "day": "13-06-2024",
      "task": "Learn about control flow and loops in Python (3 hours)"
    },
        {
      "day": "13-06-2024",
      "task": "Learn about control flow and loops in Python (3 hours)"
    },
        {
      "day": "13-06-2024",
      "task": "Learn about control flow and loops in Python (3 hours)"
    },
    {
      "day": "14-06-2024",
      "task": "Build a small project using Python (3 hours)"
  }]`;

    //remove the word 'JSON' from the beggining
    const treatedJSON = response.replace(/^json\s*/,'');

    // console.log(response.text());
    console.log('response:' + response);

    //This part should go to schedule component
    const answer = JSON.parse(treatedJSON);

    if (answer && typeof answer === 'object') {
      // Log the 'day' entry for each item in the array
      answer.forEach((item: { day: string }) => {
        console.log(item.day);
      });

    } else {
      console.error("Parsed object does not contain a valid array.");
    }

    return answer;
  }

  onCancel(){
    this.router.navigate(['/']);
  }

  async onSubmit(){
    const finalAnswer = await this.TestGeminiPro();
    this.router.navigate(['/schedule-menu'], {state: {data: finalAnswer}});
  }
}

# Crono-ai
This is an schedule generator web app! Using Google API Gemini to generate schedules according to your inputs automatically.  

This was a two week challenge to develop a simple, yet useful, project using Gemini API to create something with generative AI. It is completely for educational purposes, so, feel free to fork or clone it and try it out!

## How to start it:

* Clone the repository to your computer;  
* Install Angular CLI globally by using the command `npm install -g @angular/cli`;  
* Open the project using vscode or any code editor of your preference;  
* Open the terminal and, after accessing the project, run `npm install` to install all missing packages from  `package.json`;  
* To check if it worked, use `ng serve` and the server shall normally run at `http://localhost:4200/`;

## How to use the program:  

1. Save you API key in 'Manage API keys';  
2. Start your schedule by filling out the form;  
3. Generate!  
4. Check the results in the next screen;  

OBS: Since it uses a simple version on the Gemini API, sometimes (but rarely) the output may not be in an appropriate format and crash the program. If it happens, just restart the program and try asking in a different manner. Avoid using words such as 'Write for me...' since it may crash the propmt.

## It is still a working in progress

As it is mentioned in the beggining of this document, this was a short project to test myself in implementing AI, so there are still many features that I want to implement here. I want to make this project really nice for anyone who wishes to have a simple and cool project to start learning about generative AI hands-on!

So, keep in mind that inside the source code there are a lot of files and codes that were either abandoned ideas, tests or unfinished features! I need to do some cleaning here.

## Features that I plan to add in the future:  

* Use Google calendar API to import the schedule to your onw calendar;  
* A way to edit the cards completely! Right now, canceling edits are still a bit bugged and needs to be fixed;  
* Week feature, where you can choose the days of the week that you want to work in the schedule.
* A system to save you schedules and register your progress in each one of them;
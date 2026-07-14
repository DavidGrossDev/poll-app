import { Component } from '@angular/core';

@Component({
  selector: 'app-survey-view',
  imports: [],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.scss',
})
export class SurveyView {
  ngOnInit() {
    document.body.classList.remove('default', 'bckgrdclr-wh');
    document.body.classList.add('bckclr-wh');

    this.surveyResults= [];
  }

  surveyResults = [
    {
      "question": "Which date would work best for you?",
      "answers" :[
        {
          answer: "A",
          value: 27
        },
        {
          answer: "B",
          value: 44
        },
        {
          answer: "C",
          value: 3
        },
        {
          answer: "D",
          value: 26
        }
      ]
      
    },
    {
      "question": "Choose the activities you prefer?",
     "answers": [
        {
          answer: "A",
          value: 60
        },
        {
          answer: "B",
          value: 0
        },
        {
          answer: "C",
          value: 14
        },
        {
          answer: "D",
          value: 26
        },
        {
          answer: "E",
          value: 0
        }
      ]
    },
    {
      "question": "What’s most important to you in a team event?",
      "answers": [
        {
          answer: "A",
          value: 44
        },
        {
          answer: "B",
          value: 3
        },
        {
          answer: "C",
          value: 26
        },
        {
          answer: "D",
          value: 27
        }
      ]
    },
    {
      "question": "How long would you prefer the event to last?",
      "answers": [
        {
          answer: "A",
          value: 14
        },
        {
          answer: "B",
          value: 86
        },
        {
          answer: "C",
          value: 0
        }
      ]
    }
  ];


}
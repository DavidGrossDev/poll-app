import { Component } from '@angular/core';

@Component({
  selector: 'app-survey-list',
  imports: [],
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.scss',
})
export class SurveyList {
  list = [
    {
      category: "Team activities",
      content : "Let’s Plan the Next Team Event Together",
      ending: "Ends in 1 Day"
    },
    {
      category: "activities",
      content : "Let’s Plan",
      ending: "Ends in 6 Day"
    },
    {
      category: "Team ",
      content : "Team Event Together",
      ending: "Ends in 8 Day"
    },
    {
      category: "activ",
      content : "Plan Together",
      ending: "Ends in 16 Day"
    },
    {
      category: "ties",
      content : "Next Team",
      ending: "Ends in 7 Day"
    },
    {
      category: "eamties",
      content : "Plan Next Team r",
      ending: "Ends in 3 Day"
    }
  ]
}

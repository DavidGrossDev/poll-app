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
  }

  resultsA = [
    {
      answer:"A",
      value : 27
    },
    {
      answer:"B",
      value : 44
    },
    {
      answer:"C",
      value : 3
    },
    {
      answer:"D",
      value : 26
    }
  ];
}

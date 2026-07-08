import { Component } from '@angular/core';
import { LandingSection } from '../landing-section/landing-section';
import { EndingSoonList } from '../ending-soon-list/ending-soon-list';
import { SurveyList } from '../survey-list/survey-list';



@Component({
  selector: 'app-landing-page',
  imports: [ LandingSection, SurveyList, EndingSoonList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  ngOnInit() {
    document.body.classList.remove('default', 'bckgrdclr-wh');
    document.body.classList.add('default');
  }
  
}

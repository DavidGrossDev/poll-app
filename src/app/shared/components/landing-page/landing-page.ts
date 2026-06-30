import { Component } from '@angular/core';
import { EndingSoonList } from '../ending-soon-list/ending-soon-list';
import { SurveyList } from '../survey-list/survey-list';


@Component({
  selector: 'app-landing-page',
  imports: [EndingSoonList, SurveyList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}

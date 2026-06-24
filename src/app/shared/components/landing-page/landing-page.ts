import { Component } from '@angular/core';
import { EndingSoonList } from '../ending-soon-list/ending-soon-list';


@Component({
  selector: 'app-landing-page',
  imports: [EndingSoonList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}

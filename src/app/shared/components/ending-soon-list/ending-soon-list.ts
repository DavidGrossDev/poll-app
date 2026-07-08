import { Component } from '@angular/core';

@Component({
  selector: 'app-ending-soon-list',
  imports: [],
  templateUrl: './ending-soon-list.html',
  styleUrl: './ending-soon-list.scss',
})
export class EndingSoonList {
  endingSoonList = [
    {
      category: "Team activities",
      content : "Let’s Plan the Next Team Event Together",
      ending: "Ends in 1 Day"
    },
    {
      category: "Health & Wellness",
      content : "Fit & wellness survey!",
      ending: "Ends in 2 Days"
    },
    {
      category: "Gaming & Entertainment",
      content : "Gaming habits and favorite games!",
      ending: "Ends in 3 Days"
    }
  ]
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {
  ngOnInit() {
    document.body.classList.remove('default', 'bckgrdclr-wh');
    document.body.classList.add('bckclr-wh');
  }

  createForm = new FormGroup({
    name : new FormControl(''),
    endDate : new FormControl(''),
    description : new FormControl(''),
  
  });

  onSubmit() {
    console.log("hello");
    
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  imports: [ReactiveFormsModule],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {

  isDropdownOpen: boolean = false;
  // isChoosen: boolean = false;
  questionCounter: number = 1;
  answerCounter: number = 1;

  get isChoosen(): boolean {
    return Boolean(this.createForm.controls.category.value);
  }

  ngOnInit() {
    document.body.classList.remove('default', 'bckgrdclr-wh');
    document.body.classList.add('bckclr-wh');
  }

  createForm = new FormGroup({
    name: new FormControl(''),
    endDate: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),

    questions: new FormArray([
      this.createQuestion()
    ])
  });

  createQuestion() {
    return new FormGroup({
      question: new FormControl('', Validators.required),
      allowMultipleAnswers: new FormControl(false),

      answers: new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required)
      ])
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCategory(category: string): void {
    this.createForm.controls.category.setValue(category);
    this.isDropdownOpen = false;
  }

  onSubmit() {
    console.log("hello");

  }


}

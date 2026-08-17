import { Routes } from '@angular/router';
import { LandingPage } from "../app/shared/components/landing-page/landing-page";
import { SurveyView } from "../app/shared/components/survey-view/survey-view";
import {CreateSurvey} from "../app/shared/components/create-survey/create-survey";
import {SurveyForm} from "../app/shared/components/survey-form/survey-form";

export const routes: Routes = [
    {
        path: "",
        component: LandingPage
    },
    {
        path: "viewSurvey",
        component: SurveyView
    },
    {
        path: "createSurvey",
        component: SurveyForm
    }
];

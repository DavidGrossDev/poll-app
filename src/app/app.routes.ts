import { Routes } from '@angular/router';
import { LandingPage } from "../app/shared/components/landing-page/landing-page";
import { SurveyView } from "../app/shared/components/survey-view/survey-view";

export const routes: Routes = [
    {
        path: "",
        component: LandingPage
    },
    {
        path: "viewSurvey",
        component: SurveyView
    }
];

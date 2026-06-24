import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { LandingPage } from "./shared/components/landing-page/landing-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('poll-app');
}

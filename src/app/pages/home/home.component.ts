import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LanguageService} from "../../libs/services/language.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  welcomeWords: string [];
  langSubscription: Subscription;

  constructor(private language: LanguageService) {
    this.welcomeWords = [];
    this.langSubscription = new Subscription();
  }

  get spanishWelcomeWords(): string[] {
    return [
      "Desarrollador Frontend",
      "Desarrollador Backend",
      "Desarrollador Movil",
      "Desarrollador Fullstack",
      "Programador Apasionado"
    ]
  }

  get englishWelcomeWords(): string[] {
    return [
      "Frontend Developer",
      "Backend Developer",
      "Mobile Developer",
      "Fullstack Developer",
      "Passionated Developer"
    ]
  }

  ngOnInit(): void {
    this.langSubscription = this.language.currentLanguage$.subscribe(lang => {
      this.welcomeWords = lang === 'es' ? this.spanishWelcomeWords : this.englishWelcomeWords;
    })
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}

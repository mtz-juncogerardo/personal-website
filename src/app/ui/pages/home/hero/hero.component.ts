import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LanguageService} from "../../../../core/services/language.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {

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
      "Desarrollador Móvil",
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

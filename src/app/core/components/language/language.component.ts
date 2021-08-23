import {Component, OnDestroy, OnInit} from '@angular/core';
import {supportedLangs} from "../../Types/supportedLangs";
import {LanguageService} from "../../../libs/services/language.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit, OnDestroy {

  activeLanguage: supportedLangs;
  langSubscription: Subscription;

  constructor(private language: LanguageService) {
    this.activeLanguage = 'en';
    this.langSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.langSubscription = this.language.currentLanguage$.subscribe(lang => this.activeLanguage = lang);
  }

  useLanguage(lang: supportedLangs): void {
    this.language.changeLanguage(lang);
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}

import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BehaviorSubject, Observable} from "rxjs";
import {supportedLangs} from "../../libs/Types/supportedLangs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage: BehaviorSubject<supportedLangs>;
  currentLanguage$: Observable<supportedLangs>;

  constructor(private translate: TranslateService) {
    this.currentLanguage = new BehaviorSubject<supportedLangs>(this.defaultLang);
    this.translate.use(this.defaultLang);
    this.currentLanguage$ = this.currentLanguage.asObservable();
  }

  get defaultLang(): supportedLangs {
    return this.translate.getBrowserLang() === 'es' ? 'es' : 'en';
  }

  changeLanguage(lang: supportedLangs) {
    this.translate.use(lang);
    this.currentLanguage.next(lang);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {IkeyValue} from "../../../libs/interfaces/IkeyValue";
import {LanguageService} from "../../services/language.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy   {

  menuItems: IkeyValue[];
  langSubscription: Subscription;
  menuActive: boolean;

  constructor(private language: LanguageService) {
    this.menuItems = [];
    this.langSubscription = new Subscription();
    this.menuActive = false;
  }

  get spanishMenuItems(): IkeyValue[] {
    return [
      {
        key: '#home',
        value: 'Inicio'
      },
      {
        key: '#about',
        value: 'Conóceme'
      },
      {
        key: '#projects',
        value: 'Mis Proyectos'
      },
      {
        key: '#contact',
        value: 'Platiquemos!'
      }
    ];
  }

  get englishMenuItems(): IkeyValue[] {
    return [
      {
        key: '#home',
        value: 'Home'
      },
      {
        key: '#about',
        value: 'About Me'
      },
      {
        key: '#projects',
        value: 'My Projects'
      },
      {
        key: '#contact',
        value: 'Let\'s talk!'
      }
    ];
  }

  ngOnInit(): void {
    this.langSubscription = this.language.currentLanguage$.subscribe(lang => {
      this.menuItems = lang === 'es' ? this.spanishMenuItems : this.englishMenuItems;
    });
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const hamburgerMenu = document.querySelector('.menu-animation');
    const hamburgerMenuItem = document.querySelector('.hamburger-menu__list') as HTMLElement;
    if (this.menuActive) {
      setTimeout(() => hamburgerMenuItem.style.display = 'flex', 500);
      hamburgerMenu?.classList.remove('menu-animation--close');
      hamburgerMenu?.classList.add('menu-animation--open');
      return;
    }
    hamburgerMenuItem.style.display = 'none';
    hamburgerMenu?.classList.remove('menu-animation--open');
    hamburgerMenu?.classList.add('menu-animation--close');
  }
}

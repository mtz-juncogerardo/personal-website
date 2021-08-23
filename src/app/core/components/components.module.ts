import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from './button/button.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [NavbarComponent, ButtonComponent, LanguageComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent, ButtonComponent, LanguageComponent]
})
export class ComponentsModule {
}

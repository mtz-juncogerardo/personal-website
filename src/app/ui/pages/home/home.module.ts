import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from "./home.page";
import {AboutComponent} from "./about/about.component";
import {HeroComponent} from "./hero/hero.component";
import {LayoutsModule} from "../../layouts/layouts.module";
import {ComponentsModule} from "../../../core/components/components.module";
import {DirectivesModule} from "../../../core/directives/directives.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {
    path: '',
    component: HomePage
  }
]

@NgModule({
  declarations: [
    HomePage,
    AboutComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ComponentsModule,
    DirectivesModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {
}

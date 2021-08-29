import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroLayout } from './hero/hero.layout';
import { AboutLayout } from './about/about.layout';
import {CardLayout} from "./card/card.layout";

@NgModule({
  declarations: [
    HeroLayout,
    AboutLayout,
    CardLayout,
  ],
  exports: [
    HeroLayout,
    AboutLayout,
    CardLayout
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }

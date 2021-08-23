import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroLayout } from './hero/hero.layout';
import { AboutLayout } from './about/about.layout';



@NgModule({
  declarations: [
    HeroLayout,
    AboutLayout
  ],
  exports: [
    HeroLayout,
    AboutLayout
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }

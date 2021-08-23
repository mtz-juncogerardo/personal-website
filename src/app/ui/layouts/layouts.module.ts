import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroLayout } from './hero/hero.layout';



@NgModule({
  declarations: [
    HeroLayout
  ],
  exports: [
    HeroLayout
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }

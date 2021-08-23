import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypingAnimationDirective} from "./typing-animation.directive";



@NgModule({
  declarations: [
    TypingAnimationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TypingAnimationDirective
  ]
})
export class DirectivesModule { }

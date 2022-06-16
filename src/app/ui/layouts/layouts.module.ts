import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroLayout } from './hero/hero.layout';
import { AboutLayout } from './about/about.layout';
import { CardLayout } from "./card/card.layout";
import { ProjectsLayout } from './projects/projects.layout';

@NgModule({
  declarations: [
    HeroLayout,
    AboutLayout,
    CardLayout,
    ProjectsLayout,
  ],
  exports: [
    HeroLayout,
    AboutLayout,
    CardLayout,
    ProjectsLayout
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }

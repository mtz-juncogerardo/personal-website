import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutsModule} from "../../ui/layouts/layouts.module";
import {ComponentsModule} from "../../core/components/components.module";
import {DirectivesModule} from "../../libs/directives/directives.module";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        LayoutsModule,
        ComponentsModule,
        DirectivesModule,
        TranslateModule
    ]
})
export class HomeModule { }

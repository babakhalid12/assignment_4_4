import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { DatabasesComponent } from './databases/databases.component';
import { componentFactoryName } from '@angular/compiler';


const routes: Routes = [
  {path : 'operatingsystem', component:OperatingSystemComponent},
  {path : 'programminglanguage' ,component:ProgrammingLanguagesComponent},
  {path : 'database' , component:DatabasesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



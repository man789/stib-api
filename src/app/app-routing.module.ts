import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiStibComponent } from './api-stib/api-stib.component';
import { StibComponent } from './stib/stib.component';

const routes: Routes = [
  {path: 'stib', component: StibComponent},
  {path: 'api-stib', component: ApiStibComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

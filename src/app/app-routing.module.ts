import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatetimeComponent } from './datetime/datetime.component';

const routes: Routes = [
  {path: '', component: DatetimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

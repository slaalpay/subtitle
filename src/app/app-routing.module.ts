import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubtitleComponent } from './pages/add-subtitle/add-subtitle.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {path: "", component: StartComponent},
  {path: "add-subtitle", component: AddSubtitleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

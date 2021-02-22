import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesDashboardComponent } from './games/games-dashboard/games-dashboard.component';

const routes: Routes = [
    { path: "", component: GamesDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

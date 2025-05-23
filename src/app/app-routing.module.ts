import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  // { path: 'flames', component: FlamesComponent },
  // { path: 'tictactoe', component: TictactoeComponent },
  { path: 'rps', component: RockPaperScissorsComponent },
  { path: '', redirectTo: '/header', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/header' } // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

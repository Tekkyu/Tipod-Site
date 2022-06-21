import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentionsComponent } from './mentions/mentions.component';
import { ProjetComponent } from './pages/projet/projet.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
  {
    path : 'projet', component: ProjetComponent
  },
  {
    path : 'mentions', component: MentionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

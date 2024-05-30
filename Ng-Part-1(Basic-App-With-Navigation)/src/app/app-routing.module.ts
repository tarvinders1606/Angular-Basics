import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  //This route configuration specifies that when the URL path is empty (''), 
  //Angular should redirect to the /home route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  //The ** path represents any path that does not match other routes
  //Angular will redirect to the /home route for any unmatched URL paths
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

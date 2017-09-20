import {AuthGuard} from "./auth.guard";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
/**
 * Created by Piyush on 9/19/2017.
 */

export const routes: Routes = [

  {path: '', redirectTo: 'home', canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);

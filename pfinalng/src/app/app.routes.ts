import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {  path: 'home', component: HomeComponent  },
  {  path: 'anime', loadChildren: () => import('./pages/anime/anime.module').then(module => module.AnimeModule)},
  {  path: 'kpop', loadChildren: () => import('./pages/kpop/kpop.module').then(module => module.KpopModule)},
  {  path: 'maquillaje', loadChildren: () => import('./pages/maquillaje/maquillaje.module').then(module => module.MaquillajeModule)},
  {  path: 'ropayaccesorios', loadChildren: () => import('./pages/ropayacce/ropayacce.module').then(module => module.RopayacceModule)},
  {  path: '', redirectTo: '/home', pathMatch: "full"},
  {  path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRouterModule{}

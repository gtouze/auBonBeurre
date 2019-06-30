import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniteUnComponent } from './uniteUn/uniteUn.component';
import { UniteDeuxComponent } from './uniteDeux/uniteDeux.component';
import { UniteTroisComponent } from './uniteTrois/uniteTrois.component';
import { UniteQuatreComponent } from './uniteQuatre/uniteQuatre.component';
import { UniteCinqComponent } from './uniteCinq/uniteCinq.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: 'uniteUn', component: UniteUnComponent},
   { path: 'uniteDeux', component: UniteDeuxComponent},
   { path: 'uniteTrois', component: UniteTroisComponent},
   { path: 'uniteQuatre', component: UniteQuatreComponent},
   { path: 'uniteCinq', component: UniteCinqComponent},
   { path: 'home', component: HomeComponent},
   { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

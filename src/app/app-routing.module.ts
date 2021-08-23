import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SentinelAuthProviderListComponent} from '@sentinel/auth/components';
import {SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard} from '@sentinel/auth/guards';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [SentinelAuthGuardWithLogin], // disable this line when uploading for demonstration
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SentinelAuthProviderListComponent,
    canActivate: [SentinelNegativeAuthGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SentinelAuthProviderListComponent } from '@sentinel/auth/components';
import { SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard } from '@sentinel/auth/guards';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-page.module').then((m) => m.DashboardPageModule),
    // canActivate: [SentinelAuthGuardWithLogin],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: 'login',
  //   component: SentinelAuthProviderListComponent,
  //   canActivate: [SentinelNegativeAuthGuard],
  // },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SentinelAuthProviderListComponent } from '@sentinel/auth/components';
import { SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard } from '@sentinel/auth/guards';
import { DashboardPageComponent } from './dashboard/dashboard-page.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        canActivate: [SentinelAuthGuardWithLogin],
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: SentinelAuthProviderListComponent,
        canActivate: [SentinelNegativeAuthGuard],
    },
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

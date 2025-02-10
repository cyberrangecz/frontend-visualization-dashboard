import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardModule } from '@cyberrangecz-platform/visualization-dashboard/dashboard';
import { environment } from '../../environments/environment';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    DashboardModule.forRoot(environment.dashboardVisualizationConfig),
    MatTabsModule,
  ],
  exports: [DashboardPageComponent],
})
export class DashboardPageModule {}

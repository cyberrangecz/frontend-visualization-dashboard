import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { TrainingsVisualizationOverviewLibModule } from '@cyberrangecz-platform/overview-visualization';
import { CommonModule } from '@angular/common';
import { TrainingsHurdlingVizLibModule } from '@cyberrangecz-platform/hurdling-visualization';
import { DashboardMaterialModule } from './dashboard-material.module';
import { VisualizationDashboardConfig } from '@cyberrangecz-platform/visualization-dashboard/internal';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TrainingsVisualizationOverviewLibModule,
    TrainingsHurdlingVizLibModule,
    DashboardMaterialModule,
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {
  constructor(@Optional() @SkipSelf() parentModule: DashboardModule) {
    if (parentModule) {
      throw new Error('VisualizationDashboardModule is already loaded. Import it in the main module only');
    }
  }

  static forRoot(config): ModuleWithProviders<DashboardModule> {
    const visualizationConfig = {
      trainingServiceUrl: config.trainingBasePath,
    };
    return {
      ngModule: DashboardModule,
      providers: [
        TrainingsVisualizationOverviewLibModule.forRoot(visualizationConfig).providers,
        TrainingsHurdlingVizLibModule.forRoot(visualizationConfig).providers,
        {
          provide: VisualizationDashboardConfig,
          useValue: config,
        },
      ],
    };
  }
}

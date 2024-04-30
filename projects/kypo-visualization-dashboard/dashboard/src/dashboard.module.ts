import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { KypoTrainingsVisualizationOverviewLibModule } from '@muni-kypo-crp/overview-visualization';
import { CommonModule } from '@angular/common';
import { KypoTrainingsHurdlingVizLibModule } from '@muni-kypo-crp/hurdling-visualization';
import { DashboardMaterialModule } from './dashboard-material.module';
import { VisualizationDashboardConfig } from '@muni-kypo-crp/visualization-dashboard/internal';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    KypoTrainingsVisualizationOverviewLibModule,
    KypoTrainingsHurdlingVizLibModule,
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
        KypoTrainingsVisualizationOverviewLibModule.forRoot(visualizationConfig).providers,
        KypoTrainingsHurdlingVizLibModule.forRoot(visualizationConfig).providers,
        {
          provide: VisualizationDashboardConfig,
          useValue: config,
        },
      ],
    };
  }
}

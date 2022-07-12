import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { KypoTrainingsVisualizationOverviewLibModule } from '@muni-kypo-crp/overview-visualization';
import { CommonModule } from '@angular/common';
import { KypoTrainingsHurdlingVizLibModule } from '@muni-kypo-crp/hurdling-visualization';
import { SummaryGraphModule } from '@muni-kypo-crp/command-visualizations/summary-graph';
import { ReferenceGraphModule } from '@muni-kypo-crp/command-visualizations/reference-graph';
import { DashboardMaterialModule } from './dashboard-material.module';
import { VisualizationDashboardConfig } from '@muni-kypo-crp/visualization-dashboard/internal';
// import {LevelTabsComponent} from "./components/level-tabs/level-tabs.component";

@NgModule({
  declarations: [
    DashboardComponent,
    // LevelTabsComponent
  ],
  imports: [
    CommonModule,
    KypoTrainingsVisualizationOverviewLibModule,
    KypoTrainingsHurdlingVizLibModule,
    SummaryGraphModule,
    ReferenceGraphModule,
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

  static forRoot(config: VisualizationDashboardConfig): ModuleWithProviders<DashboardModule> {
    const visualizationConfig = {
      trainingServiceUrl: config.trainingBasePath,
    };
    return {
      ngModule: DashboardModule,
      providers: [
        SummaryGraphModule.forRoot(config).providers,
        SummaryGraphModule.forRoot(config).providers,
        ReferenceGraphModule.forRoot(config).providers,
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

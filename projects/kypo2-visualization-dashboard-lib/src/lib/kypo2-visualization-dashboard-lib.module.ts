import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { Kypo2VisualizationDashboardLibComponent } from './kypo2-visualization-dashboard-lib.component';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {LegendComponent} from './components/wrapper/legend/legend.component';
import {Kypo2TrainingsVisualizationOverviewLibModule} from 'kypo2-trainings-visualization-overview-lib';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {Kypo2VisualizationDashboardConfig} from './kypo2-visualization-dashboard-lib';
import {VisualizationHurdlingConfig, VisualizationOverviewConfig} from '../../../../src/app/custom-config';
import {Kypo2TrainingsHurdlingVizLibModule} from 'kypo2-trainings-hurdling-viz-lib';

@NgModule({
  declarations: [
      Kypo2VisualizationDashboardLibComponent,
      LegendComponent,
      WrapperComponent
  ],
  imports: [
      CommonModule,
      Kypo2TrainingsVisualizationOverviewLibModule.forRoot(VisualizationOverviewConfig),
      Kypo2TrainingsHurdlingVizLibModule.forRoot(VisualizationHurdlingConfig),
      MatSidenavModule,
      MatButtonModule
  ],
  exports: [
      Kypo2VisualizationDashboardLibComponent,
      WrapperComponent
  ]
})
export class Kypo2VisualizationDashboardLibModule {
    constructor(@Optional() @SkipSelf() parentModule: Kypo2VisualizationDashboardLibModule) {
        if (parentModule) {
            throw new Error(
                'Kypo2VisualizationDashboardLibModule is already loaded. Import it in the main module only');
        }
    }

    static forRoot(config: Kypo2VisualizationDashboardLibModule): ModuleWithProviders {
        return {
            ngModule: Kypo2VisualizationDashboardLibModule,
            providers: [
                {provide: Kypo2VisualizationDashboardConfig, useValue: config}
            ]
        };
    }
}

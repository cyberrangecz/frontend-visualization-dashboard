import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { Kypo2VisualizationDashboardLibComponent } from './kypo2-visualization-dashboard-lib.component';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {LegendComponent} from './components/wrapper/legend/legend.component';
import {Kypo2TrainingsVisualizationOverviewLibModule} from '@muni-kypo-crp/overview-visualization';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {Kypo2VisualizationDashboardConfig} from './kypo2-visualization-dashboard-lib';
import {VisualizationHurdlingConfig, VisualizationOverviewConfig} from '../../../../src/app/custom-config';
import {Kypo2TrainingsHurdlingVizLibModule} from '@muni-kypo-crp/hurdling-visualization';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

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
      MatButtonModule,
      MatTabsModule,
      MatExpansionModule,
      MatCheckboxModule
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

    static forRoot(config: Kypo2VisualizationDashboardLibModule): ModuleWithProviders<Kypo2VisualizationDashboardLibModule> {
        return {
            ngModule: Kypo2VisualizationDashboardLibModule,
            providers: [
                {provide: Kypo2VisualizationDashboardConfig, useValue: config}
            ]
        };
    }
}

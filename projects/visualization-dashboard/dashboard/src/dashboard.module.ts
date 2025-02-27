import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { TrainingsVisualizationsOverviewLibModule } from '@crczp/overview-visualization';
import { CommonModule } from '@angular/common';
import { TrainingsHurdlingVisualizationsModule } from '@crczp/hurdling-visualization';
import { DashboardMaterialModule } from './dashboard-material.module';
import { VisualizationDashboardConfig } from '@crczp/visualization-dashboard/internal';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        TrainingsVisualizationsOverviewLibModule,
        TrainingsHurdlingVisualizationsModule,
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
        return {
            ngModule: DashboardModule,
            providers: [
                TrainingsVisualizationsOverviewLibModule.forRoot(config).providers,
                TrainingsHurdlingVisualizationsModule.forRoot(config).providers,
                {
                    provide: VisualizationDashboardConfig,
                    useValue: config,
                },
            ],
        };
    }
}

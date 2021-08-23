import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {Kypo2VisualizationDashboardLibModule} from '../../../projects/kypo2-visualization-dashboard-lib/src/public_api';
import {CustomConfig} from '../custom-config';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        Kypo2VisualizationDashboardLibModule.forRoot(CustomConfig)
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
}

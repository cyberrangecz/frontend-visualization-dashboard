import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {Kypo2VisualizationDashboardLibModule} from '../../../projects/kypo2-visualization-dashboard-lib/src/public_api';
import {NgModule} from '@angular/core';
import {CustomConfig} from '../custom-config';
import {Kypo2AuthModule} from 'kypo2-auth';
import {environment} from '../../environments/environment';

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

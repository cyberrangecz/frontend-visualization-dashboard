import { VisualizationOverviewConfig } from '@crczp/overview-visualization/lib/config/trainings-visualizations-overview-lib';
import { HurdlingVisualizationConfig } from '@crczp/hurdling-visualization';
import { Injectable } from '@angular/core';

@Injectable()
export class VisualizationDashboardConfig implements VisualizationOverviewConfig, HurdlingVisualizationConfig {
    trainingServiceUrl: string;
}

import {environment} from '../environments/environment';
import {Kypo2VisualizationDashboardConfig} from '../../projects/kypo2-visualization-dashboard-lib/src/public_api';
import {HurdlingVisualizationConfig} from '@muni-kypo-crp/hurdling-visualization';
import {VisualizationOverviewConfig as OverviewVisualizationConfig} from '@muni-kypo-crp/overview-visualization';

export const CustomConfig: Kypo2VisualizationDashboardConfig = {
  trainingServiceUrl: environment.trainingServiceUrl,
  elasticSearchServiceUrl: environment.elasticSearchServiceUrl
};

export const VisualizationOverviewConfig: OverviewVisualizationConfig = {
  trainingServiceUrl: environment.trainingServiceUrl,
  elasticSearchServiceUrl: environment.elasticSearchServiceUrl
};

export const VisualizationHurdlingConfig: HurdlingVisualizationConfig = {
  trainingServiceUrl: environment.trainingServiceUrl,
  elasticSearchServiceUrl: environment.elasticSearchServiceUrl
};



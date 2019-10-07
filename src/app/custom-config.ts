import {environment} from '../environments/environment';
import {Kypo2VisualizationDashboardConfig} from '../../projects/kypo2-visualization-dashboard-lib/src/public_api';
import {Kypo2TrainingsVisualizationOverviewLibConfig} from 'kypo2-trainings-visualization-overview-lib';
import {Kypo2TrainingsHurdlingVizLibConfig} from 'kypo2-trainings-hurdling-viz-lib';

export const CustomConfig: Kypo2VisualizationDashboardConfig = {
  restBaseUrl: environment.restBaseUrl
};

export const VisualizationOverviewConfig: Kypo2TrainingsVisualizationOverviewLibConfig = {
  kypo2TrainingsVisualizationRestBasePath: environment.restBaseUrl,
};

export const VisualizationHurdlingConfig: Kypo2TrainingsHurdlingVizLibConfig = {
  restBaseUrl: environment.restBaseUrl,
};



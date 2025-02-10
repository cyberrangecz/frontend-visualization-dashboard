import { Injectable } from '@angular/core';
import { VisualizationDashboardConfig } from '../model/visualization-dashboard-config';

/**
 * Configuration service holding state of the provided config
 */
@Injectable()
export class VisualizationConfigService {
  /**
   * Config provided by client
   */
  config: VisualizationDashboardConfig;

  constructor(config: VisualizationDashboardConfig) {
    this.config = config;
  }
}

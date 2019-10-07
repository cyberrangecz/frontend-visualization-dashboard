import { Injectable } from '@angular/core';
import { ClusteringLevelsEventService } from 'kypo2-trainings-visualization-overview-lib/lib/components/clustering/interfaces/clustering-levels-event-service';
import { ClusteringFinalEventService } from 'kypo2-trainings-visualization-overview-lib/lib/components/clustering/interfaces/clustering-final-event-service';
import { GameAnalysisEventService } from 'kypo2-trainings-hurdling-viz-lib/lib/visualization/models/game-analysis-event-service';
import { LevelsComponent, FinalComponent, ClusteringComponent } from 'kypo2-trainings-visualization-overview-lib';
import { PlayerVisualizationData } from 'kypo2-trainings-visualization-overview-lib/lib/components/clustering/interfaces/player-visualization-data';
import { GameAnalysisComponent } from 'kypo2-trainings-hurdling-viz-lib';
import { Subject } from 'rxjs';
import { LineComponent } from 'kypo2-trainings-visualization-overview-lib/lib/components/timeline/line/line.component';

@Injectable({
  providedIn: 'root'
})
export class EventService implements ClusteringLevelsEventService, ClusteringFinalEventService, GameAnalysisEventService {

  clusteringLevelsComponent: LevelsComponent;
  gameAnalysisComponent: GameAnalysisComponent;
  clusteringFinalComponent: FinalComponent;
  timelineComponent: LineComponent;

    /**************************
     * Hurdling Vis Events
     *************************/

  gameAnalysisOnBarMouseover(playerId: string): void {
    this.clusteringFinalComponent.highlightHoveredPlayer({
      id: playerId
    } as PlayerVisualizationData);
    this.clusteringFinalComponent.outputSelectedPlayerId.emit(playerId);
    this.timelineComponent.highlightLine(playerId);
  }
  gameAnalysisOnBarMouseout(playerId: string): void {
    this.clusteringFinalComponent.unhighlightHoveredPlayer({
      id: playerId
    } as PlayerVisualizationData);

    this.clusteringFinalComponent.outputSelectedPlayerId.emit();
    this.timelineComponent.unhighlightLine(playerId);
  }
  gameAnalysisOnBarClick(playerId: string): void {
    console.log(playerId);
    this.timelineComponent.onRowClicked({id: playerId});
  }
  registerGameAnalysisComponent(component: GameAnalysisComponent): void {
    this.gameAnalysisComponent = component;
  }

    /**************************
     * Clustering Vis Events
     *************************/

  clusteringFinalOnPlayerMouseover(player: PlayerVisualizationData): void {
      this.gameAnalysisComponent.highlightGivenPlayer(player.id);
      this.timelineComponent.highlightLine(player.id);
  }
  clusteringFinalOnPlayerMousemove(player: PlayerVisualizationData): void {
    // throw new Error("Method not implemented.");
  }
  clusteringFinalOnPlayerMouseout(player: PlayerVisualizationData): void {
      this.gameAnalysisComponent.unhighlightGivenPlayer(player.id);
      this.timelineComponent.unhighlightLine(player.id);
  }
  clusteringFinalOnPlayerClick(player: PlayerVisualizationData): void {
      this.gameAnalysisComponent.preserveHighlightedPlayer(player.id); // todo fix?
      this.timelineComponent.onRowClicked(player);
  }
  registerClusteringFinalComponent(component: FinalComponent): void {
    this.clusteringFinalComponent = component;
  }
  clusteringLevelsOnPlayerMouseover(player: PlayerVisualizationData): void {
    this.gameAnalysisComponent.highlightGivenPlayer(player.id);
    this.timelineComponent.highlightLine(player.id);
  }
  clusteringLevelsOnPlayerMousemove(player: PlayerVisualizationData): void {
    // throw new Error("Method not implemented.");
  }
  clusteringLevelsOnPlayerMouseout(player: PlayerVisualizationData): void {
    this.gameAnalysisComponent.unhighlightGivenPlayer(player.id);
    this.timelineComponent.unhighlightLine(player.id);
  }
  clusteringLevelsOnPlayerClick(player: PlayerVisualizationData): void {
    this.gameAnalysisComponent.preserveHighlightedPlayer(player.id); // not working - fix
    this.timelineComponent.onRowClicked(player);
  }
  registerClusteringLevelsComponent(component: LevelsComponent): void {
    this.clusteringLevelsComponent = component;
  }

    /**************************
     * Timeline Vis Events
     *************************/

  registerTimelineComponent(component: LineComponent): void {
    this.timelineComponent = component;
  }

  constructor() { }
}

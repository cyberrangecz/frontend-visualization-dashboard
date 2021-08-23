import { Injectable } from '@angular/core';
import { ClusteringLevelsEventService } from '@muni-kypo-crp/overview-visualization/lib/components/agenda/clustering/interfaces/clustering-levels-event-service';
import { ClusteringFinalEventService } from '@muni-kypo-crp/overview-visualization/lib/components/agenda/clustering/interfaces/clustering-final-event-service';
// import { TrainingAnalysisEventService } from '@muni-kypo-crp/hurdling-visualization/lib/visualization/models/training-analysis-event-service';
import {LevelsComponent, FinalComponent, LineComponent } from '@muni-kypo-crp/overview-visualization';
import { PlayerData } from '@muni-kypo-crp/overview-visualization/lib/components/model/clustering/player-data';
import { TrainingAnalysisComponent } from '@muni-kypo-crp/hurdling-visualization/lib/visualization/components/visualizations/training-analysis/training-analysis.component';
import {PlayerLevelData} from '@muni-kypo-crp/overview-visualization/lib/components/model/clustering/player-level-data';

@Injectable({
  providedIn: 'root'
})
export class EventService implements ClusteringLevelsEventService, ClusteringFinalEventService/*, TrainingAnalysisEventService */{

  clusteringLevelsComponent: LevelsComponent;
  gameAnalysisComponent: TrainingAnalysisComponent;
  clusteringFinalComponent: FinalComponent;
  timelineComponent: LineComponent;

    /**************************
     * Hurdling Vis Events
     *************************/

  gameAnalysisOnBarMouseover(playerId: number): void {
    this.clusteringFinalComponent.highlightHoveredPlayer({
      id: playerId
    } as PlayerData);
    this.clusteringFinalComponent.outputSelectedPlayerId.emit(playerId);
    this.timelineComponent.highlightLine(playerId);
  }
  gameAnalysisOnBarMouseout(playerId: number): void {
    this.clusteringFinalComponent.unhighlightHoveredPlayer({
      id: playerId
    } as PlayerData);

    this.clusteringFinalComponent.outputSelectedPlayerId.emit();
    this.timelineComponent.unhighlightLine(playerId.toString());
  }
  gameAnalysisOnBarClick(playerId: string): void {
    this.timelineComponent.onRowClicked({id: playerId});
  }
  registerGameAnalysisComponent(component: TrainingAnalysisComponent): void {
    this.gameAnalysisComponent = component;
  }

    /**************************
     * Clustering Vis Events
     *************************/

  clusteringFinalOnPlayerMouseover(player: PlayerData): void {
      this.gameAnalysisComponent.highlightGivenPlayer(player.id);
      this.timelineComponent.highlightLine(player.id);
  }
  clusteringFinalOnPlayerMousemove(player: PlayerData): void {
    // throw new Error("Method not implemented.");
  }
  clusteringFinalOnPlayerMouseout(player: PlayerData): void {
      this.gameAnalysisComponent.unhighlightGivenPlayer(player.id);
      this.timelineComponent.unhighlightLine(player.id.toString());
  }
  clusteringFinalOnPlayerClick(player: PlayerData): void {
      // this.gameAnalysisComponent.preserveHighlightedPlayer(player.id); // unused
      // this.timelineComponent.onRowClicked(player);
  }
  registerClusteringFinalComponent(component: FinalComponent): void {
    this.clusteringFinalComponent = component;
  }
  clusteringLevelsOnPlayerMouseover(player: PlayerLevelData): void {
    this.gameAnalysisComponent.highlightGivenPlayer(player.id);
    this.timelineComponent.highlightLine(player.id);
  }
  clusteringLevelsOnPlayerMousemove(player: PlayerData): void {
    // throw new Error("Method not implemented.");
  }
  clusteringLevelsOnPlayerMouseout(player: PlayerLevelData): void {
    this.gameAnalysisComponent.unhighlightGivenPlayer(player.id);
    this.timelineComponent.unhighlightLine(player.id.toString());
  }
  clusteringLevelsOnPlayerClick(player: PlayerLevelData): void {
    // this.gameAnalysisComponent.preserveHighlightedPlayer(player.id); // unused
    // this.timelineComponent.onRowClicked(player);
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

  timelineSwitchPlregisterGameAnalysisComponentayerVisibility(playerId: string, visibility: boolean): void {
    //this.timelineComponent.setPlayerVisibility(playerId, visibility); //TODO changed after refactor
  }

  constructor() { }
}

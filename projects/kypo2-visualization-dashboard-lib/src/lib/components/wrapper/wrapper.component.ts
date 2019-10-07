import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {EventService} from '../../services/event.service';
import {ClusteringComponent, LineComponent} from 'kypo2-trainings-visualization-overview-lib';
import {GameAnalysisComponent} from 'kypo2-trainings-hurdling-viz-lib';
import {D3, D3Service} from 'd3-ng2-service';
import {Papa} from 'ngx-papaparse';
import {EVENTS} from '../../mocks/events.mock';
import {Event} from 'kypo2-trainings-visualization-overview-lib/lib/shared/interfaces/event';
import {GAME_INFORMATION} from '../../mocks/information.mock';
import {PapaParseResult} from 'ngx-papaparse/lib/interfaces/papa-parse-result';
import {GameData} from 'kypo2-trainings-hurdling-viz-lib/lib/visualization/models/game-data';

@Component({
  selector: 'kypo2-vis-dashboard-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
    mockFeedbackLearnerId = null;
    mockGameData = { information: GAME_INFORMATION, events: EVENTS };
    jsonGameData = {information: null, events: null};
    colorScheme = ['#307bc1', '#41ae43', '#ff9d3c', '#fc5248', '#f2d64f', '#8035c6'];
    hideCSVUpload = true;
    csvFile;
    private d3: D3;

    @ViewChild(ClusteringComponent, { static: true }) clusteringComponent: ClusteringComponent;
    @ViewChild(GameAnalysisComponent, { static: true }) gameAnalysisComponent: GameAnalysisComponent;
    @ViewChild(LineComponent, { static: true }) timelineComponent: LineComponent;

    innerWidth = window.innerWidth - 150;

    constructor(
        private papa: Papa,
        d3service: D3Service,
        public eventService: EventService
    ) {
        this.d3 = d3service.getD3();
    }

    ngOnInit() {
        this.eventService.registerClusteringFinalComponent(this.clusteringComponent.getFinalComponent());
        this.eventService.registerClusteringLevelsComponent(this.clusteringComponent.getLevelsComponent());
        this.eventService.registerGameAnalysisComponent(this.gameAnalysisComponent);
        this.eventService.registerTimelineComponent(this.timelineComponent);
    }


    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth - 150;
    }

    onEventUpload(inputEvent) {
        const file = inputEvent.target.files[0];

        const reader = new FileReader();
        reader.addEventListener('loadend', (e: any) => {
            const text = e.srcElement.result;
            // console.log(text);
            this.jsonGameData = {
                information: this.jsonGameData.information,
                events: JSON.parse(text)
            };
        });
        reader.readAsText(file);
    }
/*
    updateEvents(json) {
        this.mockGameData = { information: GAME_INFORMATION, events: json };
    }*/

    onGameUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('loadend', (e: any) => {
            const text = e.srcElement.result;
            // console.log(text);
            this.jsonGameData = {
                information: JSON.parse(text),
                events: this.jsonGameData.events
            };
        });
        reader.readAsText(file);
    }

    get isAnyPlayerHighlighted() {
        return this.gameAnalysisComponent.clickedArray.length > 0;
    }
}

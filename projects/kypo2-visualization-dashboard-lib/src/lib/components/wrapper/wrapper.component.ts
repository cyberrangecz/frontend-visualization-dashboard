import {ChangeDetectorRef, Component, HostListener, OnChanges, OnInit, ViewChild} from '@angular/core';
import {EventService} from '../../services/event.service';
import {ClusteringComponent, LineComponent} from '@muni-kypo-crp/overview-visualization';
import {TrainingAnalysisComponent} from '@muni-kypo-crp/hurdling-visualization';
import {D3, D3Service} from '@muni-kypo-crp/d3-service';
import {PLAYERS} from '../../mocks/players.mock';

@Component({
  selector: 'kypo2-vis-dashboard-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
    filters;
    traineeArray: Array<{id: string, avatar: string}> = []; // used for displaying the avatars of visible trainees in the IW header
    colorScheme = ['#ebebeb', '#dadada', '#c0c0c0', '#aeaeae', '#9b9b9b', '#646464', '#3e3e3c'];
    filteredColorScheme = ['#dadada', '#c0c0c0', '#aeaeae', '#9b9b9b', '#646464', '#3e3e3c']; // for testing, visualizations with game levels
    playerColorScheme = ['#8CD8C7', '#ADAAE1', '#D8D88C', '#7A9EBD', '#D88C8C', '#9035A6', '#372A9F', '#92D88C', '#D8008C'];
    filteredTrainees = {}; // shows, which trainee is visible in the whole visualization
    selectedPlayerView = 'avatar';

    /* testing value (static), obsolete? */
    visualizationData = {
        startTime: 0,
        estimatedEndTime: 100,
        players: PLAYERS,
        levels: [],
        playerProgress: []
    };

    private d3: D3;

    @ViewChild(ClusteringComponent, { static: true }) clusteringComponent: ClusteringComponent;
    @ViewChild(TrainingAnalysisComponent, { static: true }) TrainingAnalysisComponent: TrainingAnalysisComponent;
    @ViewChild(LineComponent, { static: true }) timelineComponent: LineComponent;

    innerWidth = document.documentElement.clientWidth - 40;

    constructor(
        private ref: ChangeDetectorRef,
        d3service: D3Service,

        public eventService: EventService
    ) {
        this.d3 = d3service.getD3();
    }

    ngOnInit() {
        this.eventService.registerClusteringFinalComponent(this.clusteringComponent.getFinalComponent());
        this.eventService.registerClusteringLevelsComponent(this.clusteringComponent.getLevelsComponent());
        this.eventService.registerGameAnalysisComponent(this.TrainingAnalysisComponent);
        this.eventService.registerTimelineComponent(this.timelineComponent);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = document.documentElement.clientWidth - 40;
    }

    /**
     * God knows what was this for. Delete it, I guess?
     * @param allFilters
     */
    onFilterChange(allFilters) {
        this.filters = allFilters;
        this.TrainingAnalysisComponent.onFilterChange();
    }

    /**
     * On a change of an array of visible trainees, those selected will be set to be visible in the timeline vis
     * @param traineeArray
     */
    onTraineeChange(traineeArray) {
        this.traineeArray = traineeArray;
        this.traineeArray.forEach( item => {
           this.filteredTrainees[item.id].timelineVisible = true;
        });
    }

    onTraineeFilter(visibleTraineeArray) {
        this.arrangeFilteredPlayers(visibleTraineeArray);
    }

    /**
     * Change the view of all trainees to avatars/names
     * @param view
     */
    togglePlayerView(view) {
        this.selectedPlayerView = view;
    }

    /**
     * A method with some logic that deals with the visibility of trainees according to the grid selection and progress vis. selection
     * @param visibleTraineeArray
     */
    arrangeFilteredPlayers(visibleTraineeArray) {
        if (visibleTraineeArray === undefined) { return; }
        // we want to compare the state with the previous state
        const previousFilteredTrainees = this.filteredTrainees = JSON.parse(JSON.stringify(this.filteredTrainees));
        this.filteredTrainees = {};

        visibleTraineeArray.forEach(player => {
            // if there is a trainee in the traineeArray, we want it's selected from the WO
            const timelineTraineeIndex = this.traineeArray.findIndex(p => p.id === player.player.id);
            // we get the previous visibility of the trainee
            const previousVisibility = previousFilteredTrainees[player.player.id] === undefined ?
                true : previousFilteredTrainees[player.player.id].selected;

            // the new visibility of the trainee
            this.filteredTrainees[player.player.id] = {
                selected: player.selected,
                active: player.active,
                timelineVisible: timelineTraineeIndex !== -1 ? true : false};

            // if there is a change in the main trainee selection for the current trainee, we have two options
            if (previousVisibility !== player.selected) {
                // the trainee IW is visible, but we must temporarily hide it
                if (this.filteredTrainees[player.player.id].timelineVisible && !player.selected) {
                    // this.eventService.timelineComponent.setPlayerVisibility(player.player.id.toString(), false); // TODO logic changed after refactor
                }
                // the trainee is selected for the IW and now we switch it back to be visible
                if (this.filteredTrainees[player.player.id].timelineVisible && player.selected) {
                    // this.eventService.timelineComponent.setPlayerVisibility(player.player.id.toString(), true); // TODO logic changed after refactor
                }
            }
        });
    }

    /**
     * \Get global visibility for given player
     * @param playerId
     */
    isPlayerTimelineVisible(playerId) {
        const current = this.filteredTrainees[playerId];
        return current.selected && current.timelineVisible;
    }

    /**
     * Get information, whether there is any player currenly selected in the timeline vis.
     */
    get isAnyPlayerHighlighted() {
        return false;
        //return this.timelineComponent.selectedPlayers.length > 0; // TODO logic changed after refactor
    }
}

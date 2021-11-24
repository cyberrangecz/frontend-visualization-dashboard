import { ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import {
  Player,
  PlayerView,
  VisualizationData,
  VisualizationsDataService,
} from '@muni-kypo-crp/hurdling-visualization';
import { D3, D3Service } from '@muni-kypo-crp/d3-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'kypo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() trainingInstanceId: number;
  @Input() trainingDefinitionId: number;
  @Input() hasReferenceSolution: boolean;

  clusteringSize = { width: innerWidth * 0.36, height: 400 };
  timelineSize = { width: innerWidth * 0.33, height: 400 };
  innerWidth = document.documentElement.clientWidth - 40;
  selectedTraineeView: PlayerView = PlayerView.Avatar;
  referenceGraphDisplayed = false;

  private highlightedTraineeSubject$: BehaviorSubject<number> = new BehaviorSubject(null);
  highlightedTrainee$: Observable<number> = this.highlightedTraineeSubject$.asObservable();

  private filteredTraineesSubject$: BehaviorSubject<number[]> = new BehaviorSubject([]);
  filteredTrainees$: Observable<number[]> = this.filteredTraineesSubject$.asObservable();

  private hurdlingTraineesSubject$: BehaviorSubject<Player[]> = new BehaviorSubject([]);
  hurdlingTrainees$: Observable<Player[]> = this.hurdlingTraineesSubject$.asObservable();

  private activeFiltersSubject$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  activeFilters$: Observable<any[]> = this.activeFiltersSubject$.asObservable();

  visualizationData$: Observable<VisualizationData>;

  private d3: D3;

  constructor(
    private visualizationDataService: VisualizationsDataService,
    private ref: ChangeDetectorRef,
    d3service: D3Service
  ) {
    this.d3 = d3service.getD3();
  }

  ngOnInit(): void {
    this.visualizationData$ = this.visualizationDataService.visualizationData$;
    this.loadData();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = document.documentElement.clientWidth - 40;
    if (document.documentElement.clientWidth < 1200) {
      this.clusteringSize.width = this.innerWidth * 0.8;
      this.timelineSize.width = this.innerWidth * 0.8;
    } else {
      this.clusteringSize.width = this.innerWidth * 0.36;
      this.timelineSize.width = this.innerWidth * 0.33;
    }
  }

  /**
   * Change the view of all trainees to avatars/names
   * @param view selected view
   */
  togglePlayerView(view: MatSelectChange): void {
    if (view.value === 'name') {
      this.selectedTraineeView = PlayerView.Name;
    } else if (view.value === 'both') {
      this.selectedTraineeView = PlayerView.Both;
    } else {
      this.selectedTraineeView = PlayerView.Avatar;
    }
  }

  /**
   * Updates subject of currently highlighted trainee
   * @param trainingRunId trainee training run id
   */
  highlightTraineeChange(trainingRunId: number): void {
    this.highlightedTraineeSubject$.next(trainingRunId);
  }

  /**
   * Updates subject of currently selected (displayed) trainees
   * @param trainingRunIds array of training runs
   */
  selectedTraineesChange(trainingRunIds: number[]): void {
    this.filteredTraineesSubject$.next(trainingRunIds);
  }

  /**
   * Updates subject of currently active filters from event emitted by filter component
   * @param activeFilters object of active filters
   */
  filterChange(activeFilters: any): void {
    this.activeFiltersSubject$.next(activeFilters);
  }

  /**
   * Updates subject of currently selected trainees from event emitted by hurdling player selection component
   * @param selectedTrainees selected trainees
   */
  traineeFilterChange(selectedTrainees: Player[]): void {
    this.hurdlingTraineesSubject$.next(selectedTrainees);
  }

  /**
   * Sets state whether reference graph should be displayed
   */
  setReferenceGraph(): void {
    this.referenceGraphDisplayed = !this.referenceGraphDisplayed;
  }

  /**
   * Returns trainee picture
   * @param traineeId id of trainee
   */
  getTraineeAvatar(traineeId: number): string {
    return this.hurdlingTraineesSubject$.getValue().find((player) => player.trainingRunId === traineeId).picture;
  }

  private loadData() {
    this.visualizationDataService.getData(this.trainingInstanceId).pipe(take(1)).subscribe();
  }
}

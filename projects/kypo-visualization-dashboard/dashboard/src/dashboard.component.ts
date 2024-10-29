import { ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import {
  Trainee,
  TraineeView,
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

  innerWidth = document.documentElement.clientWidth - 200;
  clusteringSize =
    innerWidth > 1550 ? { width: innerWidth * 0.36, height: 400 } : { width: innerWidth * 0.7, height: 400 };
  timelineSize =
    innerWidth > 1550 ? { width: innerWidth * 0.33, height: 400 } : { width: innerWidth * 0.7, height: 400 };
  selectedTraineeView: TraineeView = TraineeView.Avatar;

  private highlightedTraineeSubject$: BehaviorSubject<number> = new BehaviorSubject(null);
  highlightedTrainee$: Observable<number> = this.highlightedTraineeSubject$.asObservable();

  private filteredTraineesSubject$: BehaviorSubject<number[]> = new BehaviorSubject([]);
  filteredTrainees$: Observable<number[]> = this.filteredTraineesSubject$.asObservable();

  private lineTraineesSubject$: BehaviorSubject<number[]> = new BehaviorSubject([]);
  lineTrainees$: Observable<number[]> = this.lineTraineesSubject$.asObservable();

  private hurdlingTraineesSubject$: BehaviorSubject<Trainee[]> = new BehaviorSubject([]);
  hurdlingTrainees$: Observable<Trainee[]> = this.hurdlingTraineesSubject$.asObservable();

  private hurdlingSelectedTraineesSubject$: BehaviorSubject<number[]> = new BehaviorSubject([]);
  hurdlingSelectedTrainees$: Observable<number[]> = this.hurdlingSelectedTraineesSubject$.asObservable();

  private activeFiltersSubject$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  activeFilters$: Observable<any[]> = this.activeFiltersSubject$.asObservable();

  visualizationData$: Observable<VisualizationData>;

  private d3: D3;

  constructor(
    private visualizationDataService: VisualizationsDataService,
    private ref: ChangeDetectorRef,
    d3service: D3Service,
  ) {
    this.d3 = d3service.getD3();
  }

  ngOnInit(): void {
    this.visualizationData$ = this.visualizationDataService.visualizationData$;
    this.loadData();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = document.getElementsByClassName('dashboard-container')[0].getBoundingClientRect().width;
    if (document.documentElement.clientWidth < 1545) {
      this.clusteringSize.width = this.innerWidth * 0.7;
      this.timelineSize.width = this.innerWidth * 0.7;
    } else {
      this.clusteringSize.width = this.innerWidth * 0.36;
      this.timelineSize.width = this.innerWidth * 0.34;
    }
  }

  /**
   * Change the view of all trainees to avatars/names
   * @param view selected view
   */
  togglePlayerView(view: MatSelectChange): void {
    if (view.value === 'name') {
      this.selectedTraineeView = TraineeView.Name;
    } else if (view.value === 'both') {
      this.selectedTraineeView = TraineeView.Both;
    } else {
      this.selectedTraineeView = TraineeView.Avatar;
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
    this.hurdlingSelectedTraineesSubject$.next(trainingRunIds);
    this.lineTraineesSubject$.next([...trainingRunIds]);
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
  traineeFilterChange(selectedTrainees: Trainee[]): void {
    this.lineTraineesSubject$.next(this.updateLineTrainees(selectedTrainees));
    this.hurdlingTraineesSubject$.next(selectedTrainees);
    this.filteredTraineesSubject$.next(selectedTrainees.map((trainee) => trainee.trainingRunId));
  }

  /**
   * Returns trainee picture
   * @param traineeId id of trainee
   */
  getTraineeAvatar(traineeId: number): string {
    if (this.hurdlingTraineesSubject$.getValue().find((player) => player.trainingRunId === traineeId) !== undefined) {
      return this.hurdlingTraineesSubject$.getValue().find((player) => player.trainingRunId === traineeId).picture;
    } else {
      return '';
    }
  }

  private loadData(): void {
    this.visualizationDataService.getData(this.trainingInstanceId).pipe(take(1)).subscribe();
  }

  private updateLineTrainees(trainees: Trainee[]): number[] {
    const gridSelected: number[] = trainees.map((trainee) => trainee.trainingRunId);
    return this.hurdlingSelectedTraineesSubject$.getValue().filter((trainee) => gridSelected.indexOf(trainee) !== -1);
  }
}

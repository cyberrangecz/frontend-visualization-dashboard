import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GAME_INFORMATION } from '../../projects/kypo2-visualization-dashboard-lib/src/lib/mocks/information.mock';
import { EVENTS } from '../../projects/kypo2-visualization-dashboard-lib/src/lib/mocks/events.mock';
import { Papa } from 'ngx-papaparse';
import { PapaParseResult } from 'ngx-papaparse/lib/interfaces/papa-parse-result';
import { D3, D3Service } from 'd3-ng2-service';
import { Event } from 'kypo2-trainings-visualization-overview-lib/lib/shared/interfaces/event';
import { EventService } from '../../projects/kypo2-visualization-dashboard-lib/src/lib/services/event.service';
import { FinalComponent, LevelsComponent, ClusteringComponent, TimelineComponent, LineComponent } from 'kypo2-trainings-visualization-overview-lib';
import { GameAnalysisComponent } from 'kypo2-trainings-hurdling-viz-lib';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {AuthService} from './auth/auth.service';
import {authConfig} from './auth/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/ {
    /*constructor(
        private oAuthService: OAuthService,
        private authService: AuthService) {}

    ngOnInit() {
        this.subscribeOIDCEvents();
        this.configureOidc();
    }
    private configureOidc() {
        this.oAuthService.setStorage(localStorage);
        this.oAuthService.configure(authConfig);
        this.oAuthService.loadDiscoveryDocument()
            .then(() => {
                this.oAuthService.tryLogin()
                    .then(() => {
                        this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
                        this.oAuthService.setupAutomaticSilentRefresh();
                    });
            });
        this.authService.login();
    }

    private subscribeOIDCEvents() {
        this.oAuthService.events.subscribe(event => {
            if (event.type === 'token_refresh_error'
                || event.type === 'token_error'
                || event.type === 'silent_refresh_error'
                || event.type === 'token_validation_error') {
                console.log(event.type);
                this.authService.logout();
            }
        });
    }*/
}

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventService } from '../../projects/kypo2-visualization-dashboard-lib/src/lib/services/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import {SentinelAuthModule} from '@sentinel/auth';
import {SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard} from '@sentinel/auth/guards';
import {D3Service} from '@muni-kypo-crp/d3-service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SentinelAuthModule.forRoot(environment.authConfig)
  ],
  providers: [
    SentinelAuthGuardWithLogin,
    SentinelNegativeAuthGuard,
    D3Service,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SentinelAuthModule.forRoot(environment.authConfig)
    ],
    providers: [
        SentinelAuthGuardWithLogin,
        SentinelNegativeAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
 */

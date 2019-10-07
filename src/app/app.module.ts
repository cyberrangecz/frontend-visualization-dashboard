import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { D3Service } from 'd3-ng2-service';
import { EventService } from '../../projects/kypo2-visualization-dashboard-lib/src/lib/services/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OAuthModule, OAuthStorage} from 'angular-oauth2-oidc';
import {AuthService} from './auth/auth.service';
import {AuthHttpInterceptor} from './auth/auth-http-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    OAuthModule.forRoot(
        {
            resourceServer: {
                allowedUrls: [],
                sendAccessToken: true
            }
        }
    )
  ],
  providers: [
    AuthService,
      { provide: OAuthStorage, useValue: localStorage },
      { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    D3Service,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

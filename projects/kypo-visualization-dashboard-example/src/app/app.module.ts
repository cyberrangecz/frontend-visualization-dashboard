import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SentinelAuthModule } from '@sentinel/auth';
import { SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard } from '@sentinel/auth/guards';
import { D3Service } from '@muni-kypo-crp/d3-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SentinelLayout1Module } from '@sentinel/layout/layout1';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SentinelAuthModule.forRoot(environment.authConfig),
    SentinelLayout1Module,
  ],
  providers: [SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard, D3Service],
  bootstrap: [AppComponent],
})
export class AppModule {}

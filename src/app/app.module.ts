import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppState } from './store/app.state';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomePageModule } from './components/home-page/home-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HomePageModule,
    MatProgressBarModule,
    NgxsModule.forRoot([AppState], {
      selectorOptions: {
        // these Selector Settings are recommended
        suppressErrors: false,
        injectContainerState: false
      },
      compatibility: {
        strictContentSecurityPolicy: true
      },
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      collapsed: true,
      disabled: environment.production
    }),
    // should be added after all NGXS mudules
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MatSlideToggleModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

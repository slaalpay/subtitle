import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { AddSubtitleComponent } from './pages/add-subtitle/add-subtitle.component';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './pages/video/video.component';
import {MatIconModule} from '@angular/material/icon';
import { SubtitleInputComponent } from './pages/subtitle-input/subtitle-input.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AddSubtitleComponent,
    VideoComponent,
    SubtitleInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule

  ],
  providers: [StartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

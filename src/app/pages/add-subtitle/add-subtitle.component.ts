import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SubtitleInputComponent } from '../subtitle-input/subtitle-input.component';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-add-subtitle',
  templateUrl: './add-subtitle.component.html',
  styleUrls: ['./add-subtitle.component.css']
})
export class AddSubtitleComponent implements OnInit {
  @Input() video_id =""
  addSubtitle= false;
  checked = false;

  
  constructor( public startComponent: StartComponent) {
    
  }

  ngOnInit(): void {
  this.video_id = this.startComponent.video_id
  console.log(this.startComponent.video_id)
  this.addSubtitle= false;
  }
  
  addCaption() {
    this.addSubtitle= true
  }






}

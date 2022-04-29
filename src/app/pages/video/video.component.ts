import { Component, Input, OnInit } from '@angular/core';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video_id: string
  checked = false;
  

  constructor(public startComponent: StartComponent) {
    this.video_id = this.startComponent.video_id
    console.log(this.video_id)
   }

  ngOnInit(): void {
  }

}

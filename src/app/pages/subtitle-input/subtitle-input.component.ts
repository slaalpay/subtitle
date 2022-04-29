import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle-input',
  templateUrl: './subtitle-input.component.html',
  styleUrls: ['./subtitle-input.component.css']
})
export class SubtitleInputComponent implements OnInit {
  @Input() isButtonClick = false;
  constructor() {
   
   }

  ngOnInit(): void {
  }

  deleteSubtitle(){
    this.isButtonClick=false;
    console.log("deneme2")
  }
 
  
}

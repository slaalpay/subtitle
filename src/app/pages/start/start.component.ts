import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  video_id =""
  isSuccess = false;
  
  regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  url = new FormControl('', [Validators.required, Validators.pattern(this.regExp)]);
  submit() {
    if (this.url.errors) {
      return
    }
    else {
      console.log(this.url.value)
      this.splitUrl();
      this.router.navigate(["add-subtitle"])
    }

  }
  splitUrl() {
    
    this.video_id = this.url.value.split("v=")[1].substring(0, 11)
    console.log(this.video_id)
  }

}

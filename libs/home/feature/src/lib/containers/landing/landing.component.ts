import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'agency-x-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  emailControl = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.emailControl.valueChanges.subscribe(val => console.log(`Landing component: ${val}`));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'agency-x-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
    this.emailControl.valueChanges.pipe(
      debounceTime(500),
      filter(v => this.emailControl.valid)
    ).subscribe(console.log);
  }

}

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter, tap, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'agency-x-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmailInputComponent,
      multi: true
    }
  ]
})
export class EmailInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() deboundTime = 500;

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  private onChange: any;
  private subs: Subscription;

  constructor() { }

  ngOnInit() {
    this.subs = this.emailControl.valueChanges.pipe(
      debounceTime(this.deboundTime),
      distinctUntilChanged(),
      filter(v => this.emailControl.valid),
      tap(val => this.onChange(val))
    ).subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  writeValue(obj: any): void {
    this.emailControl.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled)
      this.emailControl.disable();
    else
      this.emailControl.enable();
  }

}

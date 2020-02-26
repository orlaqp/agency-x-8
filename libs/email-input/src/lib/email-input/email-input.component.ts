import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter, tap, distinctUntilChanged } from 'rxjs/operators';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Select } from '@ngxs/store';
import { SharedState, ITheme } from '@agency-x/shared/data-access';

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
  ],
  animations:[
    trigger('focusAnimation', [
      state('default', style({
        transform: 'scale(1)',
        'box-shadow': 'none'
      })),
      state('focused', style({
        transform: 'scale(1.05)',
        'box-shadow': '0 0 1.5rem rgba({{shadowRgb}},.5)'
      }), { params: { shadowRgb: '0,0,0' } }),
      transition('default <=> focused', animate(150))
    ])
  ]
})
export class EmailInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Select(SharedState.selectedTheme)
  selectedTheme$: Observable<ITheme>;

  @Input() deboundTime = 500;

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  private onChange: any;
  private subs: Subscription;
  private focusSubject = new BehaviorSubject<number>(0);

  focusState$ = this.focusSubject.pipe(
    map(val => val === 0 ? 'default' : 'focused')
  );

  shadowRgb$ = this.selectedTheme$.pipe(
    map(t => t.isDark ? '238,238,238' : '0,0,0')
  );

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

  updateFocusSubject(value: number) {
    const currentValue = this.focusSubject.value;
    this.focusSubject.next(currentValue + value);
  }

}

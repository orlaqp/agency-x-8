import { Component, OnInit } from '@angular/core';
import { EnvService } from '@agency-x/config/frontend';
import { ITheme } from '@agency-x/shared/shared';

@Component({
  selector: 'agency-x-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  public themes: ITheme[];

  constructor(env: EnvService) {
    this.themes = env.themes;
  }

  ngOnInit() {
  }

}

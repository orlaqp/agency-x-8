import { Component, OnInit } from '@angular/core';
import { EnvService } from '@agency-x/config/frontend';
import { ITheme } from '@agency-x/shared/shared';
import { StyleManagerService } from '../style-manager.service';

@Component({
  selector: 'agency-x-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  public themes: ITheme[];
  public selectedTheme: ITheme;

  constructor(env: EnvService, private styleManager: StyleManagerService) {
    this.themes = env.themes;

    this.selectedTheme = this.themes.find(t => t.isDefault);
  }

  ngOnInit() {
  }

  changeTheme(t: ITheme) {
    this.selectedTheme = t;

    this.styleManager.changeTheme(t);
  }

}

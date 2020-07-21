import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@agency-x/auth/data-access';

@Component({
  selector: 'agency-x-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logoff() {
    this.authService.logoff();
  }

}

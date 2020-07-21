import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@agency-x/auth/data-access';

@Component({
  selector: 'agency-x-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorizedComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.authService.authorize();
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'agency-x-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
    menuItems: [
        { id: 'add', icon: 'add', text: 'Add' },
        { id: 'dashboard', icon: 'dashboard', text: 'Dashboard' },
        { id: 'people', icon: 'people', text: 'Clients' },
        { id: 'calendar', icon: 'insert_invitation', text: 'Calendar' },
        { id: 'payments', icon: 'attach_money', text: 'Payments' },
        { id: 'payments', icon: 'attach_money', text: 'Payments' },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

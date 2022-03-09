import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output('toggleSideBar') sidebarToggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  logout() {}
  toggleSideBar() {
    this.sidebarToggle.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SidebarService } from 'src/app/services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200)),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  @Input('expandSidebar') expandSidebar!: boolean;
  @Output('toggleSideBar') sidebarToggle = new EventEmitter();
  menus: any = [];

  constructor(public sidebarservice: SidebarService) {
    this.menus = sidebarservice.getMenuList();
  }

  ngOnInit() {}

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggleSideBar() {
    this.sidebarToggle.emit();
  }

  toggle(currentMenu: any) {
    this.menus.forEach((element: any) => {
      if (element === currentMenu) {
        currentMenu.active = true;
      } else {
        element.active = false;
      }
    });
  }

  getState(currentMenu: any) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }
}
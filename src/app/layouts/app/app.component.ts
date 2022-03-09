import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  slideFadeinUp,
  slideFadeinRight,
  zoomFadein,
  fadein,
} from './router-animations';

@Component({
  selector: 'layout-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideFadeinUp, slideFadeinRight, zoomFadein, fadein],
})
export class LayoutAppComponent {
  routerAnimation!: string;
  expandSidebar!: boolean;
  innerWidth!: number;

  constructor() {
    this.routerAnimation = 'fadein';
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 700) {
      this.expandSidebar = false;
    }
  }
  ngOnInit() {}

  toggleSideBar() {
    this.expandSidebar = !this.expandSidebar;
  }
  routeAnimation(outlet: any, animation: string) {
    if (animation === this.routerAnimation) {
      return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
    }
  }
  changeOfRoutes() {}
}

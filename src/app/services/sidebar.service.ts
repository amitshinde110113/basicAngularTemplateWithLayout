import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Actions',
      type: 'header',
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      routerLink: '/dashboard',
      active: true,
      // type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning',
      },
      // submenus: [
      //   {
      //     title: 'Dashboard 1',
      //     badge: {
      //       text: 'Pro ',
      //       class: 'badge-success',
      //     },
      //   },
      //   {
      //     title: 'Dashboard 2',
      //   },
      //   {
      //     title: 'Dashboard 3',
      //   },
      // ],
    },
    {
      title: 'Clusters',
      icon: 'fas fa-layer-group',
      routerLink: '/clusters',

      active: false,
      // type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-danger',
      },
      // submenus: [
      //   {
      //     title: 'Products',
      //   },
      //   {
      //     title: 'Orders',
      //   },
      //   {
      //     title: 'Credit cart',
      //   },
      // ],
    },
    {
      title: 'Nodes',
      icon: 'far fa-gem',
      routerLink: '/ndoes',
      active: false,
      // type: 'dropdown',
      // submenus: [
      //   {
      //     title: 'General',
      //   },
      //   {
      //     title: 'Panels',
      //   },
      //   {
      //     title: 'Tables',
      //   },
      //   {
      //     title: 'Icons',
      //   },
      //   {
      //     title: 'Forms',
      //   },
      // ],
    },
    {
      title: 'Namespaces',
      icon: 'fa fa-server',
      routerLink: '/namespaces',
      active: false,
      // type: 'dropdown',
      // submenus: [
      //   {
      //     title: 'Pie chart',
      //   },
      //   {
      //     title: 'Line chart',
      //   },
      //   {
      //     title: 'Bar chart',
      //   },
      //   {
      //     title: 'Histogram',
      //   },
      // ],
    },
    // {
    //   title: 'Workload',
    //   icon: 'fa fa-globe',
    //   active: false,
    // type: 'dropdown',
    // submenus: [
    //   {
    //     title: 'Google maps',
    //   },
    //   {
    //     title: 'Open street map',
    //   },
    // ],
    // },
    // {
    //   title: 'Storage',
    //   type: 'header',
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary',
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple',
    // },
    // {
    //   title: 'Examples',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple',
    // },
  ];
  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}

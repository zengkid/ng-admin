import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: '/users'
    }
  ];

  constructor(private readonly sidebarService: NbSidebarService) {
    this.items =  [
      {
        title: 'Profile',
        icon: 'people-outline',
        expanded: true,
        children: [
          {
            title: 'Change Password',          
            icon: 'people-outline',
          },
          {
            title: 'Privacy Policy',
          },
          {
            title: 'Logout',
          },
        ],
      },
      {
        title: 'Shopping Bag',
        icon: 'people-outline',
        children: [
          {
            title: 'First Product',
          },
          {
            title: 'Second Product',
          },
          {
            title: 'Third Product',
          },
        ],
      },
      {
        title: 'Orders',
        children: [
          {
            title: 'First Order',
          },
          {
            title: 'Second Order',
          },
          {
            title: 'Third Order',
          },
        ],
      },
    ];
    // for (let i = 0; i < 20; i++) {
    //   const menuItem = new NbMenuItem();
    //   menuItem.title = 'Menu_' + i;
    //   menuItem.link = '/link' + i;
    //   this.items.push(menuItem);
    // }
  }
  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true)
    // return false;
  }

}

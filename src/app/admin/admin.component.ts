import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private readonly sidebarService: NbSidebarService, private router: Router,) {
    this.items = [
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
        title: 'pages',
        children: [
          {
            title: 'page1',
            link: '/admin/page1'
          },
          {
            title: 'page2',
            link: '/admin/page2'
          },
        ],
      },
    ];
  }
  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true)
    // return false;
  }

  logout() {
    this.router.navigate(['/login'])

  }

}

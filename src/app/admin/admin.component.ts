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
        title: 'Security',
        icon: { icon: 'shield-blank', pack: 'fa' },
        children: [
          {
            title: 'User',
            icon: { icon: 'user', pack: 'fa' },
            link: '/admin/page1'
          },
          {
            title: 'Role',
            icon: { icon: 'user-group', pack: 'fa' },
            link: '/admin/page2'
          },
          {
            title: 'Permission',
            icon: { icon: 'clover', pack: 'fa' },
            link: '/admin/page3'
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

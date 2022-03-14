import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  items: NbMenuItem[];

  ngOnInit(): void {
  }

  constructor(private readonly sidebarService: NbSidebarService, private router: Router,) {
    this.items = [
      {
      title: 'DashBoard',
      link: '/admin',
      icon: { icon: 'home', pack: 'fa' },
    },
      {
        title: 'Security',
        icon: { icon: 'shield-blank', pack: 'fa' },
        children: [
          {
            title: 'User',
            icon: { icon: 'user', pack: 'fa' },
            link: '/admin/user'
          },
          {
            title: 'Role',
            icon: { icon: 'user-group', pack: 'fa' },
            link: '/admin/role'
          },
          {
            title: 'Permission',
            icon: { icon: 'clover', pack: 'fa' },
            link: '/admin/permission'
          },
        ],
      },
    ];
  }

  toggleSidebar() {
    this.sidebarService.toggle(true)
    // return false;
  }

  logout() {
    this.router.navigate(['/login'])

  }
}

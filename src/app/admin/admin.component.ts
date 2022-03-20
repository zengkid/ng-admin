import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  items: NbMenuItem[];

  ngOnInit(): void {
  }

  constructor(private sidebarService: NbSidebarService,
    private router: Router,
    private nbMenuService: NbMenuService,
    private themeService: NbThemeService) {
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
      }, {
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
      }, {
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

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'theme-menu'),
        map(({ item: { data } }) => data),
      )
      .subscribe(theme => {
        this.themeService.changeTheme(theme);
        console.log(theme);
      });
      
  }

  themes = [{ title: 'default', data: 'default' }, { title: 'dark', data: 'dark' }, { title: 'corporate', data: 'corporate' }, { title: 'cosmic', data: 'cosmic' }];


  toggleSidebar() {
    this.sidebarService.toggle(true)
    // return false;
  }

  logout() {
    this.router.navigate(['/login'])

  }

  changeTheme() {
    // this.themeService.changeTheme("corporate");

    
  }

}

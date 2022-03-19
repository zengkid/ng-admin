import { Component, OnInit } from '@angular/core';


export interface IMenu {
  text: string,
  icon: string,
  routerLink?: string;
  children?: IMenuItem[]
}
export interface IMenuItem {
  text: string,
  icon: string,
  routerLink: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList!: IMenu[];

  constructor() { }

  ngOnInit() {
    this.menuList = [
        {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      }, {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
      {
        "text": " 安全管理",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/security/user"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/security/role"
          },
          {
            "text": "权限管理",
            "icon": "all_inbox",
            "routerLink": "/admin/security/permission"
          }
        ]
      },
      {
        "text": " 普通页面",
        "icon": "inventory_2",
        "children": [
          {
            "text": "用户管理",
            "icon": "category",
            "routerLink": "/admin/page1"
          },
          {
            "text": "角色管理",
            "icon": "layers",
            "routerLink": "/admin/page2"
          }
        ]
      },
    ];
  }

}

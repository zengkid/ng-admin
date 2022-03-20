import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { UserComponent } from './security/user/user.component';
import { RoleComponent } from './security/role/role.component';
import { PermissionComponent } from './security/permission/permission.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbActionsModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    RoleComponent,
    PermissionComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // BrowserAnimationsModule,
    NbIconModule,               // <---------
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({ name: 'default' }),
    NbContextMenuModule,
    NbLayoutModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbEvaIconsModule,
  ] 
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionComponent } from './security/permission/permission.component';
import { RoleComponent } from './security/role/role.component';
import { UserComponent } from './security/user/user.component';

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    {path: '', component: DashboardComponent},
    { path: 'user', component: UserComponent },
    { path: 'role', component: RoleComponent },
    { path: 'permission', component: PermissionComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { Page1Component } from './admin/page1/page1.component';
import { Page2Component } from './admin/page2/page2.component';
import { Page3Component } from './admin/page3/page3.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [{ path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: 'page3', component: Page3Component },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

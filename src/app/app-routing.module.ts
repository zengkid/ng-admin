import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { Page1Component } from './admin/pages/page1/page1.component';
import { Page2Component } from './admin/pages/page2/page2.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

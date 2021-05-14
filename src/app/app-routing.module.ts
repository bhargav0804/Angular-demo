import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/header/about/about.component';
import { CustomersComponent } from './dashboard/header/customers/customers.component';
import { LoginComponent } from './dashboard/header/login/login.component';
import { OrdersComponent } from './dashboard/header/orders/orders.component';

const routes: Routes = [
  { path:'dashboard',component:DashboardComponent },
  { path:'',redirectTo:'dashboard',pathMatch:'full' },
  { path:'customers',component:CustomersComponent },
  { path:'Orders',component:OrdersComponent },
  { path:'About',component:AboutComponent },
  { path:'Login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
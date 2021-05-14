import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { MaincontentComponent } from './dashboard/maincontent/maincontent.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './dashboard/header/customers/customers.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './dashboard/header/orders/orders.component';
import { AboutComponent } from './dashboard/header/about/about.component';
import { LoginComponent } from './dashboard/header/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    FooterComponent,
    DashboardComponent,
    CustomersComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

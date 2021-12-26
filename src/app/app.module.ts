import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login & Register/login/login.component';
import { RegisterComponent } from './Login & Register/register/register.component';
import { IndexComponent } from './Component/index/index.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ViewItemComponent } from './ViewComponent/view-item/view-item.component';
import { ViewListComponent } from './ViewComponent/view-list/view-list.component';
import { CartComponent } from './Cart & Checkout/cart/cart.component';
import { CheckoutComponent } from './Cart & Checkout/checkout/checkout.component';
import { HeaderAdminComponent } from './Admin/header-admin/header-admin.component';
import { IndexAdminComponent } from './Admin/index-admin/index-admin.component';
import { FooterAdminComponent } from './Admin/footer-admin/footer-admin.component';
import { UpdateItemComponent } from './Admin/update-item/update-item.component';
import { ViewListItemComponent } from './Admin/view-list-item/view-list-item.component';
import { CheckoutCartComponent } from './Admin/checkout-cart/checkout-cart.component';
import { UserComponent } from './Admin/user/user.component';
import { HeadeListComponent } from './Component/heade-list/heade-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewSearchComponent } from './ViewComponent/view-search/view-search.component';
import { BackToTopComponent } from './Component/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ViewItemComponent,
    ViewListComponent,
    CartComponent,
    CheckoutComponent,
    HeaderAdminComponent,
    IndexAdminComponent,
    FooterAdminComponent,
    UpdateItemComponent,
    ViewListItemComponent,
    CheckoutCartComponent,
    UserComponent,
    HeadeListComponent,
    ViewSearchComponent,
    BackToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutCartComponent } from './Admin/checkout-cart/checkout-cart.component';
import { IndexAdminComponent } from './Admin/index-admin/index-admin.component';
import { UpdateItemComponent } from './Admin/update-item/update-item.component';
import { UserComponent } from './Admin/user/user.component';
import { ViewListItemComponent } from './Admin/view-list-item/view-list-item.component';
import { CartComponent } from './Cart & Checkout/cart/cart.component';
import { CheckoutComponent } from './Cart & Checkout/checkout/checkout.component';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './Login & Register/login/login.component';
import { RegisterComponent } from './Login & Register/register/register.component';
import { ViewItemComponent } from './ViewComponent/view-item/view-item.component';
import { ViewListComponent } from './ViewComponent/view-list/view-list.component';
import { ViewSearchComponent } from './ViewComponent/view-search/view-search.component';


const routes: Routes = [
  {
    path:"",component:IndexComponent
  },
  {
    path:"view/:id",component:ViewItemComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  }
  ,
  {
    path:"cart",component:CartComponent
  },
  {
    path:"show/:id",component:ViewSearchComponent
  }
  ,
  {
    path:"check",component:CheckoutComponent
  },
  {
    path:"viewList/:id",component:ViewListComponent
  }
  ,
  {
    path:"dashbroad",component:IndexAdminComponent
  }
  ,
  {
    path:"showview",component:ViewListItemComponent
  },
  {
    path:"checkoutCart",component:CheckoutCartComponent
  },
  {
    path:"update",component:UpdateItemComponent
  },
  {
    path:"user",component:UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

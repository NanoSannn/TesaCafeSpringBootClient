import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/pages/add-customer/add-customer.component';
import { AddDrinkComponent } from './components/pages/add-drink/add-drink.component';
import { AddFavoriteDrinksComponent } from './components/pages/add-favorite-drinks/add-favorite-drinks.component';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { AddSalesComponent } from './components/pages/add-sales/add-sales.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { DrinkComponent } from './components/pages/drink/drink.component';
import { EditCustomerComponent } from './components/pages/edit-customer/edit-customer.component';
import { EditDrinkComponent } from './components/pages/edit-drink/edit-drink.component';
import { EditSalesComponent } from './components/pages/edit-sales/edit-sales.component';
import { MainComponent } from './components/pages/main/main.component';
import { SalesComponent } from './components/pages/sales/sales.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "drink", component: DrinkComponent},
  { path: "drink/adddrink", component: AddDrinkComponent},
  { path: "drink/edit/:id", component: EditDrinkComponent},
  { path: "customer", component: CustomerComponent},
  { path: "customer/addcustomer", component: AddCustomerComponent},
  { path: "customer/edit/:id", component: EditCustomerComponent},
  { path: "customer/:id", component: AddFavoriteDrinksComponent},
  { path: "sales", component: SalesComponent},
  { path: "sales/addSales", component: AddSalesComponent},
  { path: "sales/edit/:id", component: EditSalesComponent},
  { path: "sales/:id", component: AddItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

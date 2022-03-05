import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { EditCustomerComponent } from './components/pages/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './components/pages/add-customer/add-customer.component';
import { AddFavoriteDrinksComponent } from './components/pages/add-favorite-drinks/add-favorite-drinks.component';
import { DrinkComponent } from './components/pages/drink/drink.component';
import { EditDrinkComponent } from './components/pages/edit-drink/edit-drink.component';
import { AddDrinkComponent } from './components/pages/add-drink/add-drink.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { AddSalesComponent } from './components/pages/add-sales/add-sales.component';
import { EditSalesComponent } from './components/pages/edit-sales/edit-sales.component';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddFavoriteDrinksComponent,
    DrinkComponent,
    EditDrinkComponent,
    AddDrinkComponent,
    SalesComponent,
    AddSalesComponent,
    EditSalesComponent,
    AddItemComponent,
    NavigationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

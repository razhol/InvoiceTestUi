import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { AddInvoiceComponentComponent } from './invoice-list-component/add-invoice-component/add-invoice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponentComponent,
    AddInvoiceComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

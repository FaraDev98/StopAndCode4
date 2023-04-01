import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionsMainComponent } from './transactions-main/transactions-main.component';
import { TransactionsComponent } from './transactions/transactions.component'


@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionEditComponent,
    TransactionsMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

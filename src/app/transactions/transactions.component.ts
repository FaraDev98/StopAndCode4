import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { Transaction, TransactionDto } from '../models/transaction';
import { of } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionsService: TransactionsService) { }

  transactions: Transaction[] = [];
  editMode: boolean = false;
  transactionInEdit = new TransactionDto()
  importoTotale: number = 0;

  ngOnInit(): void {
    this.getTransactionsList();
  }

  getTransactionsList() {
    this.transactionsService.getTransactionsList()
      .subscribe(data => {
        this.transactions = data
        this.totalAmount();
      })
  }

  deleteTransaction(t: Transaction) {
    this.transactionsService.delete(t)
      .subscribe(res => this.getTransactionsList());
  }


  editTransaction(t: TransactionDto) {
    this.editMode = true;
    this.transactionInEdit = t;
  }

  reload() {
    this.getTransactionsList()
  }

  transactionEdited() {
    this.getTransactionsList()
  }

  totalAmount() {
    this.importoTotale = 0;
    for (let t of this.transactions!) {
      this.importoTotale += t.importo;
    }
  }

}
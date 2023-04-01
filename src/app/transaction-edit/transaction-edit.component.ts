import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { Transaction, TransactionDto } from '../models/transaction';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent {


  constructor(private transactionsService: TransactionsService) { }

  @Input()
  edit = new TransactionDto()

  @Input()
  editMode: boolean = false;

  @Output()
  onAdded = new EventEmitter<Transaction>()

  @Output()
  onEdit = new EventEmitter<any>()

  addTransaction() {
    this.transactionsService.add(this.edit)
      .subscribe(res => {
        this.onAdded.emit(res);
      })
  }

  editTransaction() {
    this.transactionsService.edit(this.edit)
      .subscribe(res => {
        this.onEdit.emit(res);
        this.edit = new TransactionDto();
      })
  }

  abort() {
    this.edit = new TransactionDto()
  }

}

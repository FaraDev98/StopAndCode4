import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction, TransactionDto } from './models/transaction';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  // transactionAdded?: boolean;

  constructor(private http: HttpClient) { }

  getTransactionsList(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(environment.TRANSACTIONS_BASE_URL + "transazioni")
  }

  delete(transaction: Transaction): Observable<Transaction> {
    return this.http.delete<Transaction>(environment.TRANSACTIONS_BASE_URL + "transazioni/" + transaction.id)
  }

  add(transaction: TransactionDto): Observable<Transaction> {
    return this.http.post<Transaction>(environment.TRANSACTIONS_BASE_URL + "transazioni", transaction)
  }

  edit(transaction: TransactionDto) {
    return this.http.patch(environment.TRANSACTIONS_BASE_URL + "transazioni/" + transaction.id, transaction)
  }

}

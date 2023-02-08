import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InvoiceObject } from './ivoiceObject'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  public baseURL:string = "https://localhost:7113/Invoice"
  constructor(private http:HttpClient) { }

  getAllInvoices(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
 }
 postInvoice(data: InvoiceObject): Observable<any> {
  console.log(data)
  return this.http.post(`${this.baseURL}`, data)
 }
 
 deleteInvoice(id:any){
  return this.http.delete(`${this.baseURL}/${id}`)
 }

 updateInvoice(data: any, id: string): Observable<any> {
  return this.http.put(`${this.baseURL}/${id}`, data)
}
  
}

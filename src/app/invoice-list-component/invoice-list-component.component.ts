import { Component } from '@angular/core';
import { InvoiceObject } from '../ivoiceObject'
import { InvoiceService } from '../invoice-service.service';
import { EnumStatuses } from '../enumStatuses'

@Component({
  selector: 'app-invoice-list-component',
  templateUrl: './invoice-list-component.component.html',
  styleUrls: ['./invoice-list-component.component.scss']
})
export class InvoiceListComponentComponent {
  public showAddInvoiceDIV: boolean = false;
  public Invoices: InvoiceObject[] = []
  public enumStatuses:any = EnumStatuses
  public keys:string[] = []
  constructor(private InvoiceService: InvoiceService) { }

  ngOnInit() {
    this.keys = Object.keys(this.enumStatuses).filter(k => String(k));
    this.getInvoices()
  }

  public getInvoices() {
    this.InvoiceService.getAllInvoices()
      .subscribe(data => {
        this.Invoices = data;
        this.Invoices.map(x => x.disabledEdit = true)
      })
  }

  public dateChange(newDate: Date, id: string) {
    let index = this.Invoices.findIndex(x => x.id == id)
    this.Invoices[index].date = newDate
  }

  public deleteInvoice(id: string) {
    this.InvoiceService.deleteInvoice(id).subscribe(response => {
      if (response) {
        this.getInvoices()
      }
    })
  }


  public presentAddComponent() {
    this.showAddInvoiceDIV = true;
  }

  public addInvoice(newInvoice: InvoiceObject) {
    this.InvoiceService.postInvoice(newInvoice)
      .subscribe(response => {
        if (response) {
          this.getInvoices()
        }
      })
  }

  public editOrSaveInvoice(Invoice: InvoiceObject) {
    Invoice.disabledEdit = !Invoice.disabledEdit
    if (Invoice.disabledEdit == true) {
      this.InvoiceService.updateInvoice(Invoice, Invoice.id)
        .subscribe(response => {
          if (response) {
            this.getInvoices()
          }
        })
    }
  }
}

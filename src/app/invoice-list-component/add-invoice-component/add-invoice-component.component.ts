import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-invoice',
  templateUrl: './add-invoice-component.component.html',
  styleUrls: ['./add-invoice-component.component.scss']
})
export class AddInvoiceComponentComponent {
  public newInvoice: any = { date: new Date("2023-02-24"), status: "Active", amount: 0 };
  @Output() public addInvoice = new EventEmitter();
  @Output() public close = new EventEmitter();
  @Input() public enumStatuses: any;
  @Input() public keys: string[] = [];

  public valueChange(value: any, fieldName: string) {
    this.newInvoice[fieldName] = value;
  }

}

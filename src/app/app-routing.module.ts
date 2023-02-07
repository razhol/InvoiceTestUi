import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';

const routes: Routes = [
  {path: '', component: InvoiceListComponentComponent},
  // {path: 'crisis-list', component: CrisisListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

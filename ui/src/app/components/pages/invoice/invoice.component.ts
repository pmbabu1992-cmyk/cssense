import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { CsReusableTablesComponent } from 'src/app/_cs/cs-reusable-tables/cs-reusable-tables.component';

@Component({
    selector: 'app-invoice',
    standalone:true,
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
    imports: [PageHeaderComponent,CsReusableTablesComponent]
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  printPage(): void {
    window.print();
  }

  ProductsHeader = [
    {header:'Type',tableHeadColumn:'w-20'},
    {header:'Description',tableHeadColumn:'w-40'},
    {header:'QNTY',tableHeadColumn:'text-center'},
    {header:'Unit Price'},
    {header:'Amount'},
  ]

}

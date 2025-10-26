import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbTooltip, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CsReusableTablesComponent } from 'src/app/_cs/cs-reusable-tables/cs-reusable-tables.component';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';

const DATA = [
  {
    image: './assets/images/faces/1.jpg',
    id: Math.random(),
    name: 'Megan Peters',
    create: '08/06/2021',
    status: 'In Active',
    email: 'mila@kunis.com',
  },
  {
    image: './assets/images/faces/2.jpg',
    id: Math.random(),
    name: 'George Clooney',
    create: '12/06/2021',
    status: 'Active',
    email: 'marlon@brando.com',
  },
  {
    image: './assets/images/faces/3.jpg',
    id: Math.random(),
    name: 'Ryan Gossling',
    create: '14/06/2021',
    status: 'Banned',
    email: 'jack@nicholson',
  },
  {
    image: './assets/images/faces/4.jpg',
    id: Math.random(),
    name: 'Emma Watson',
    create: '16/06/2021',
    status: 'Pending',
    email: 'jack@nicholsonm',
  },
  {
    image: './assets/images/faces/5.jpg',
    id: Math.random(),
    name: 'Mila Kunis',
    create: '18/06/2021',
    status: 'In Active',
    email: 'mila@kunis.com',
  },
  {
    image: './assets/images/faces/6.jpg',
    id: Math.random(),
    name: 'Phil Watson',
    create: '23/06/2021',
    status: 'Active',
    email: 'phil@watson.com',
  },
  {
    image: './assets/images/faces/7.jpg',
    id: Math.random(),
    name: 'Sonia Robertson',
    create: '25/06/2021',
    status: 'Active',
    email: 'robertson@sonia.com',
  },
  {
    image: './assets/images/faces/8.jpg',
    id: Math.random(),
    name: 'Adam Hamilton',
    create: '31/06/2021',
    status: 'Banned',
    email: 'mila@kunis.com',
  },
  {
    image: './assets/images/faces/9.jpg',
    id: Math.random(),
    name: 'Leah Morgan',
    create: '02/07/2021',
    status: 'Pending',
    email: 'morganleah@.com',
  },
  {
    image: './assets/images/faces/10.jpg',
    id: Math.random(),
    name: 'Amelia McDonald',
    create: '08/07/2021',
    status: 'Active',
    email: 'amelia23@kunis.com',
  },
  {
    image: './assets/images/faces/11.jpg',
    id: Math.random(),
    name: 'Paul Molive',
    create: '12/07/2021',
    status: 'Active',
    email: 'paul45@kunis.com',
  },
];

@Component({
    selector: 'app-userlist',
    standalone:true,
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss'],
    imports: [PageHeaderComponent,NgbTooltip,CsReusableTablesComponent,NgbPaginationModule,CsDropdownsComponent]
})
export class UserlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = DATA;

  delete = (id: any) => {
    var Outputdata = this.data.filter((x) => {
      return x.id != id;
    });
    this.data = Outputdata;
  };

  ProductsHeader = [
    {header:'User photo'},
    {header:'Name'},
    {header:'Created'},
    {header:'Status'},
    {header:'Email'},
    {header:'Action'},
  ]
}

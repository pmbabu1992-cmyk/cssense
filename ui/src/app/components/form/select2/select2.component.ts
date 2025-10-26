import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data-service.service';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CsNgSelectComponent } from 'src/app/_cs/cs-ng-select/cs-ng-select.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
    selector: 'app-select2',
    standalone:true,
    templateUrl: './select2.component.html',
    styleUrls: ['./select2.component.scss'],
    imports: [PageHeaderComponent, FormsModule,ReactiveFormsModule,CsNgSelectComponent,NgbAlertModule,NgSelectModule]
})
export class Select2Component {
  disabled = false;
  Selection1 = [
    { value: 1, label: 'Andrew' },
    { value: 2, label: 'Maya' },
    { value: 3, label: 'BrodusAxel' },
    { value: 3, label: 'Goldhens' },
    { value: 3, label: 'Angelina' }
];
  Selection = [
    { value: 1, label: 'Selection-1' },
    { value: 2, label: 'Selection-2' },
    { value: 3, label: 'Selection-3' },
    { value: 3, label: 'Selection-4' },
    { value: 3, label: 'Selection-5' }
];
singleSelection = [
  { value: 1, label: 'Texas' },
  { value: 2, label: 'Georgia' },
  { value: 3, label: 'California' },
  { value: 3, label: 'Washington D.C' },
  { value: 3, label: 'Virginia' }
];
multipleSelection = [
{ value: 1, label: 'Appple' },
{ value: 2, label: 'Mango' },
{ value: 3, label: 'Orange' },
{ value: 3, label: 'Guava' },
{ value: 3, label: 'Pineapple' }
];
    //Templating
    options = [
      {
        value: "Andrew",
        label: "Andrew",
        image: "./assets/images/faces/1.jpg"
      },
      {
        value: "Maya",
        label: "Maya",
        image: "./assets/images/faces/2.jpg"
      },
      {
        value: "BrodusAxel",
        label: "BrodusAxel",
        image: "./assets/images/faces/3.jpg"
      },
      {
        value: "Goldhens",
        label: "Goldhens",
        image: "./assets/images/faces/4.jpg"
      },
      {
        value: "Angelina",
        label: "Angelina",
        image: "./assets/images/faces/5.jpg"
      }
    ];
  
    defaultValue: any; // Initialize as needed
  
    onValueChange(event: any) {
      console.log(event); // Handle value changes as needed
    }
cities1 = [

  {
    id: 1,
    name: 'Andrew',
    avatar: './assets/images/faces/select2/p-1.jpg',
  },
  {
    id: 2,
    name: 'Maya',
    avatar: './assets/images/faces/select2/p-2.jpg',
  },
  {
    id: 3,
    name: 'Brodus Axel',
    avatar: './assets/images/faces/select2/p-3.jpg',
  },
  {
    id: 4,
    name: 'Goldens',
    avatar: './assets/images/faces/select2/p-4.jpg',
  },
  {
    id: 5,
    name: 'Angelina',
    avatar: './assets/images/faces/select2/p-5.jpg',
  },
];
cities = [
  { name: 'New York', avatar: './assets/images/faces/5.jpg' },
  { name: 'London', avatar: 'https://via.placeholder.com/15x15.png?text=LD' },
  { name: 'Paris', avatar: 'https://via.placeholder.com/15x15.png?text=PR' }
];
selectedCity2: any = null;

onCityChange(city: any): void {
  console.log('Selected city:', city);
}
selectedCity = this.options[0].label;
selectedCity1 = this.cities1[0].name;
people$!: Observable<any[]>;



  constructor(private dataService: DataService) {
  }

  ngOnInit() {
      this.people$ = this.dataService.getPeople('');
  }
  selectedPersonId:any=[1,2]
  selectedPerson:any=['Selection-1']

  enableSelect(): void {
    this.disable = false;
  }

  disableSelect(): void {
    this.disable = true;
  }
  disable:any;

  
customer:any;

public onClearAll() {
  this.customer = [];
}
multipleSelect=[
  {label:"Multiple-1",value:1},
  {label:"Multiple-2",value:2},
  {label:"Multiple-3",value:3},
  {label:"Multiple-4",value:4},
  {label:"Multiple-5",value:5},
]
selectedMulti=[1]
onCitySelected(selected: any) {
  this.selectedCity = selected;
  // You can perform additional actions based on the selected city here
}
}

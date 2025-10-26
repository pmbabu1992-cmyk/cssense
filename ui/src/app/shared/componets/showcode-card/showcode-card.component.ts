import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-showcode-card',
  templateUrl: './showcode-card.component.html',
  styleUrl: './showcode-card.component.scss',
  standalone: true,
  imports : [CommonModule,NgbModule]
})
export class ShowcodeCardComponent {

  @Input('title') title!:string;
  @Input('prism') prism!:string;
  @Input('tsCode') tsCode!:string;
  @Input('reuseCode') reuseCode!:string;
  @Input('classbody') classbody!:string;
  toggleStatus = false;

  toggleShowCode(){
    this.toggleStatus = !this.toggleStatus;
  }
  hasTsCode = false;
}

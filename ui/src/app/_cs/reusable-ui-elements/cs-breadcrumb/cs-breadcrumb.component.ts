import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-breadcrumb.component.html',
  styleUrl: './cs-breadcrumb.component.scss'
})
export class CsBreadcrumbComponent {
@Input() olClass:string='';
@Input() divider: string = '/'; // default divider
}

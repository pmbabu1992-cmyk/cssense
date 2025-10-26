import { Component, Input } from '@angular/core';
import { CsDropdownsComponent } from '../../reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cs-pages-todotask',
  imports: [NgbDropdownModule,NgbTooltipModule],
  templateUrl: './cs-pages-todotask.component.html',
  styleUrl: './cs-pages-todotask.component.scss'
})
export class CsPagesTodotaskComponent {
  @Input() profileImage: string = ''; // Profile image URL
  @Input() assignedTasks: number = 0; // Number of assigned tasks
  @Input() userName: string = ''; // User's name
  @Input() userRole: string = ''; // User's role (e.g., Web Designer)
  @Input() taskStatus: string = ''; // Status of the task (e.g., New task, Pending task)
  @Input() taskTime: string = ''; // Time when the task was added
  @Input() taskTitle: string = ''; // Title of the task
  @Input() taskDescription: string = ''; // Description of the task
  @Input() taskColor: string = ''; // Badge color (bg-primary, bg-danger, etc.)
  @Input() taskBtnColor: string = ''; // Button color (btn-primary, btn-warning, etc.)
  @Input() disabled: boolean = false; // Disable the assign button
}

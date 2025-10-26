import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CsPagesTodotaskComponent } from 'src/app/_cs/reusable-pages/cs-pages-todotask/cs-pages-todotask.component';

@Component({
    selector: 'app-todotask',
    standalone:true,
    templateUrl: './todotask.component.html',
    styleUrls: ['./todotask.component.scss'],
    imports: [PageHeaderComponent,CsPagesTodotaskComponent,NgbTooltipModule],
})
export class TodotaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tasks = [
    {
      profileImage: './assets/images/faces/1.jpg',
      assignedTasks: 9,
      userName: 'Petey Cruiser',
      userRole: 'Web Designer',
      taskStatus: 'New task',
      taskTime: '10.54am',
      taskTitle: 'Work Assigned by Clients, try to get new work',
      taskDescription: 'Sed ut perspiciatis unde omnis iste natus',
      taskColor: 'bg-purple',
      taskBtnColor: 'btn-primary',
      disabled: true
    },
    {
      profileImage: './assets/images/faces/12.jpg',
      assignedTasks: 2,
      userName: 'Mclaren Mcannen',
      userRole: 'Web Designer',
      taskStatus: 'New task',
      taskTime: '10.54am',
      taskTitle: 'Work Assigned by Clients, try to get new work',
      taskDescription: 'Sed ut perspiciatis unde omnis iste natus',
      taskColor: 'bg-info',
      taskBtnColor: 'btn-warning',
      disabled: false
    },
    {
      profileImage: './assets/images/faces/2.jpg',
      assignedTasks: 7,
      userName: 'Rosen Berg',
      userRole: 'Chief Manager',
      taskStatus: 'Pending task',
      taskTime: '11.12am',
      taskTitle: 'Team meeting scheduled for next week',
      taskDescription: 'Ut enim ad minima veniam nostrum exercitationem',
      taskColor: 'bg-danger',
      taskBtnColor: 'btn-danger',
      disabled: false
    },
    {
      profileImage: './assets/images/faces/3.jpg',
      assignedTasks: 5,
      userName: 'John Doe',
      userRole: 'Backend Developer',
      taskStatus: 'New task',
      taskTime: '9.45am',
      taskTitle: 'API integration for client project',
      taskDescription: 'Nemo enim ipsam voluptatem quia voluptas',
      taskColor: 'bg-success',
      taskBtnColor: 'btn-success',
      disabled: true
    },
    {
      profileImage: './assets/images/faces/4.jpg',
      assignedTasks: 3,
      userName: 'Shannon Murphy',
      userRole: 'Frontend Developer',
      taskStatus: 'Pending task',
      taskTime: '2.30pm',
      taskTitle: 'Fix CSS issues in homepage',
      taskDescription: 'Quis autem vel eum iure reprehenderit qui',
      taskColor: 'bg-warning',
      taskBtnColor: 'btn-warning',
      disabled: false
    },
    {
      profileImage: './assets/images/faces/5.jpg',
      assignedTasks: 10,
      userName: 'Maya Wells',
      userRole: 'Project Manager',
      taskStatus: 'Completed task',
      taskTime: '4.10pm',
      taskTitle: 'Complete project documentation and final submission',
      taskDescription: 'I will give you a complete account of the system',
      taskColor: 'bg-primary',
      taskBtnColor: 'btn-primary',
      disabled: false
    }
  ];
}

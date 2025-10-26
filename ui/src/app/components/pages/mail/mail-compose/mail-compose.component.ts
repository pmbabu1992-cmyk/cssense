import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-mail-compose',
    standalone:true,
    templateUrl: './mail-compose.component.html',
    styleUrls: ['./mail-compose.component.scss'],
    imports: [PageHeaderComponent, RouterLink, FormsModule, NgbTooltip]
})
export class MailComposeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

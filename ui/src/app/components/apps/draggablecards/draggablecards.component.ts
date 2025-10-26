
import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';
import { CsCollapseCardComponent } from 'src/app/_cs/reusable-ui-elements/cs-cards/cs-collapse-card/cs-collapse-card.component';
@Component({
    selector: 'app-draggablecards',
    standalone:true,
    templateUrl: './draggablecards.component.html',
    styleUrls: ['./draggablecards.component.scss'],
    imports: [
        PageHeaderComponent,
        SortablejsModule,
        NgbCollapse,
        CsCollapseCardComponent
    ],
})
export class DraggablecardsComponent implements OnInit {
  isCollapsed = false;
  isCollapsed1 = false;

  ngOnInit(): void {
 
  }
 
  leftCards = [];
  rightCards = [];

  sortableConfig = {
    group: {
      name: 'shared',
      pull: true,
      put: true
    },
    animation: 150,
    
  };
  
 

  toggleClass = 'card-fullscreen';
  public fullScreen: boolean = true;

  fullScreenToggle() {
    document
      .querySelector('.fullscreentoggle')
      ?.classList.toggle('card-fullscreen');
  }

  closeResult: string | undefined;
}
   
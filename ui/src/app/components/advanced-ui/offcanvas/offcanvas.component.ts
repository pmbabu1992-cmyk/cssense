import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/offcanvas'
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
@Component({
    selector: 'app-offcanvas',
    standalone:true,
    templateUrl: './offcanvas.component.html',
    styleUrls: ['./offcanvas.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent] 
})
export class OffcanvasComponent {
  closeResult = '';
  prismCode = prismCodeData;
  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
    
  }

  openNoBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { backdrop: false });
  }

  openStaticBackdrop(content1: TemplateRef<any>) {
    this.offcanvasService.open(content1, { backdrop: 'static' });
  }
  EnableBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { scroll: false });
  }
  openTop(content2: TemplateRef<any>) {
    this.offcanvasService.open(content2, { position: 'top' });
  }
  openRight(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openBottom(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'bottom' });
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxNotifierComponent, NgxNotifierService } from 'ngx-notifier';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-notification',
    standalone:true,
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    imports: [PageHeaderComponent ,NgxNotifierComponent]
})
export class NotificationComponent implements OnInit {
  
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private ngxNotifierService: NgxNotifierService
 ) {
   
  }

  info() {
    this.ngxNotifierService.createToast('Info: Some info here', 'info', 2000);
  }
  
  success() {
    this.ngxNotifierService.createToast('Success: Well done Details Submitted Successfully.', 'success', 2000);
  }
  
  warning() {
    this.ngxNotifierService.createToast('Warning: Something Went Wrong', 'warning', 2000);
    
  }

  error() {
    this.ngxNotifierService.createToast('Oops! An Error Occurred', 'danger', 2000);

  }
  
  ngOnInit(): void {}

  public tost() {
    this.toastr.success('Successfully Done!');
  }

  public tost2() {
    this.toastr.error('Error !!');
  }

  public tost3() {
    this.toastr.info('Info');
  }

  public tost4() {
    this.toastr.show('Show');
  }

  showDefault1() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: false,
    });
  }
  showDefault2() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
      progressBar: false,
    });
  }
  showDefault3() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-top-left',
      progressBar: false,
    });
  }
  showDefault4() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      progressBar: false,
    });
  }
  showDefault5() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressBar: false,
    });
  }
  showDefault6() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      progressBar: false,

    });
  }
  showDefault7() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressBar: false,
    });
  }
  showDefault8() {
    this.toastr.success('Details Successfully Uploaded', 'CS', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: false,
    });
  }

  CongratulationsOpen(congratulations: any) {
    this.modalService.open(congratulations, { centered: true 
    });
  }

  public showError(): void {
    this.toastr.error('Error!', 'Error!', {
      positionClass: 'toast-bottom-right',
    });
  }

  public showSuccess(): void {
    this.toastr.success('Success!', 'Success!', {
      positionClass: 'toast-bottom-right',
    });
  }
}

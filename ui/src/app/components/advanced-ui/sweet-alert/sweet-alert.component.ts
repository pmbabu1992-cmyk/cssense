import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-sweet-alert',
    standalone:true,
    templateUrl: './sweet-alert.component.html',
    styleUrls: ['./sweet-alert.component.scss'],
    imports: [PageHeaderComponent]
})
export class SweetAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public SimpleMessage = 'Message';
  public SimpleTitle = 'Your Message';

  footerAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
  titleAlert() {
    Swal.fire({
      icon: 'question',
      title: 'The Internet ?',
      text: 'That thing is still around ?',
    });
  }

  longWindowAlert() {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image',
    });
  }
  htmlAlert() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }
  multiBtnAlert() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
  dialogAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  confirmAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  imageAlert1() {
    Swal.fire({
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(./assets/images/media/media-19.jpg)',
    });
  }

  basicAlert() {
    Swal.fire({
      title: 'Hello this is Basic alert message',
      confirmButtonColor: '#0162e8',
    });
  }
  AjaxAlert() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }

  parameterAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#0162e8',
      cancelButtonText: 'No, cancel it!',
      cancelButtonColor: '#0162e8',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#0162e8',
        });
      }
    });
  }

  imageAlert() {
    Swal.fire({
      title: 'Lovely',
      text: 'Your image is uploaded.',
      imageUrl: './assets/images/media/media-59.jpg',
      confirmButtonColor: '#0162e8',
    });
  }

  timerAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      confirmButtonColor: '#0162e8',
      timer: 2000,
      timerProgressBar: true,
    });
  }
}

import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalShellComponent } from './modal-shell.component';
import { ModalButton, ModalOpenOptions, ModalSize } from './modal.types';

@Injectable({ providedIn: 'root' })
export class AppModalService {
  constructor(private modal: NgbModal) {}

  openTemplate(opts: ModalOpenOptions & { contentTpl: TemplateRef<any> }) {
    const options: NgbModalOptions = {
      centered: opts.centered ?? true,
      scrollable: opts.scrollable ?? true,
      size: opts.size as ModalSize,
      modalDialogClass: opts.modalDialogClass,
      backdrop: opts.backdrop,
      keyboard: opts.keyboard,
    };

    const ref = this.modal.open(ModalShellComponent, options);
    const cmp = ref.componentInstance as ModalShellComponent;
    cmp.title = opts.title;
    cmp.headerTpl = opts.headerTpl;
    cmp.contentTpl = opts.contentTpl;
    cmp.footerTpl = opts.footerTpl;
    cmp.context = opts.context;
    cmp.buttons = (opts as any).buttons || [] as ModalButton[];
    return ref;
  }

  confirm(opts: {
    title?: string;
    messageTpl?: TemplateRef<any>;
    size?: ModalSize;
    confirmText?: string;
    cancelText?: string;
    centered?: boolean;
    scrollable?: boolean;
  }) {
    const confirmBtn: ModalButton = {
      label: opts.confirmText || 'Confirm',
      cssClass: 'btn btn-primary',
      result: true,
      autoFocus: true,
    };
    const cancelBtn: ModalButton = {
      label: opts.cancelText || 'Cancel',
      cssClass: 'btn btn-secondary',
      result: false,
    };

    const ref = this.openTemplate({
      title: opts.title || 'Confirm',
      contentTpl: opts.messageTpl!,
      size: opts.size,
      centered: opts.centered,
      scrollable: opts.scrollable,
      // default footer buttons:
      // @ts-ignore
      buttons: [cancelBtn, confirmBtn],
    } as any);

    return ref.result as Promise<boolean>;
  }
}

import { TemplateRef } from '@angular/core';

export type ModalSize = 'sm' | 'lg' | 'xl';

export interface ModalButton {
  id?: string;
  label: string;
  cssClass?: string; // e.g., 'btn btn-primary'
  autoFocus?: boolean;
  closeOnClick?: boolean; // default true
  result?: any; // value returned when closing
  onClick?: (event: MouseEvent) => void; // optional click hook
}

export interface ModalOpenOptions {
  title?: string;
  headerTpl?: TemplateRef<any>;
  contentTpl?: TemplateRef<any>;
  footerTpl?: TemplateRef<any>;
  context?: any;
  size?: ModalSize;
  centered?: boolean;
  scrollable?: boolean;
  modalDialogClass?: string;
  backdrop?: true | false | 'static';
  keyboard?: boolean;
}

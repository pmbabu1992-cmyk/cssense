import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalButton } from './modal.types';

@Component({
  selector: 'app-modal-shell',
  standalone: true,
  imports: [CommonModule, NgbModule],
  template: `
    <div class="modal-header">
      <ng-container *ngIf="headerTpl; else defaultHeader">
        <ng-container *ngTemplateOutlet="headerTpl; context: templateContext"></ng-container>
      </ng-container>
      <ng-template #defaultHeader>
        <h6 class="modal-title">{{ title }}</h6>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('close')"></button>
      </ng-template>
    </div>

    <div class="modal-body">
      <ng-container *ngIf="contentTpl">
        <ng-container *ngTemplateOutlet="contentTpl; context: templateContext"></ng-container>
      </ng-container>
    </div>

    <div class="modal-footer" *ngIf="footerTpl || (buttons && buttons.length)">
      <ng-container *ngIf="footerTpl; else buttonsFooter">
        <ng-container *ngTemplateOutlet="footerTpl; context: templateContext"></ng-container>
      </ng-container>
      <ng-template #buttonsFooter>
        <button *ngFor="let b of buttons; let idx = index"
                type="button"
                [class]="b.cssClass || 'btn btn-secondary'"
                [autofocus]="b.autoFocus"
                (click)="onButtonClick(b, $event)">
          {{ b.label }}
        </button>
      </ng-template>
    </div>
  `,
})
export class ModalShellComponent {
  @Input() title?: string;
  @Input() headerTpl?: TemplateRef<any>;
  @Input() contentTpl?: TemplateRef<any>;
  @Input() footerTpl?: TemplateRef<any>;
  @Input() context?: any;
  @Input() buttons: ModalButton[] = [];

  get templateContext() {
    return { $implicit: this.context, context: this.context };
  }

  constructor(public activeModal: NgbActiveModal) {}

  onButtonClick(btn: ModalButton, event: MouseEvent) {
    btn.onClick?.(event);
    const close = btn.closeOnClick !== false; // default true
    if (close) this.activeModal.close(btn.result ?? true);
  }
}

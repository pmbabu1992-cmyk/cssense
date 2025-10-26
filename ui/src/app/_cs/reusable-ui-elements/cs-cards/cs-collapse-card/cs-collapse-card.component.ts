import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-collapse-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-collapse-card.component.html',
  styleUrl: './cs-collapse-card.component.scss'
})
export class CsCollapseCardComponent {
  @Input() title: string = 'Card Title';
  @Input() collapseClass?: string = '';
  @Input() subtitle?: string = '';
  @Input() defaultBorder?: string = '';
  @Input() content?: string = 'Default card content';
  @Input() fullscreenContent?: string = 'Default card content';
  @Input() isCollapsible: boolean = false;
  @Input() isClosable: boolean = false;
  @Input() isFullscreenable: boolean = false;
  isCollapsed: boolean = false;
  isClosed: boolean = false;
  isFullscreen: boolean = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCard() {
    this.isClosed = true;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}

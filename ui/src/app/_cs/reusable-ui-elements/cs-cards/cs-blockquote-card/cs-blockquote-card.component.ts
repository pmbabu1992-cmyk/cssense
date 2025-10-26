import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-blockquote-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-blockquote-card.component.html',
  styleUrl: './cs-blockquote-card.component.scss'
})
export class CsBlockquoteCardComponent {
  @Input() cardBg: string = ''; 
  @Input() quote: string = ''; // The main quote text
  @Input() author: string = ''; // The author of the quote
  @Input() textColor1: string = ''; // The author of the quote
  @Input() textColor: string = ''; // The author of the quote
  @Input() sourceTitle: string = ''; // The source or citation title
}

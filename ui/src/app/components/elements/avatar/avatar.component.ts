import { Component, OnInit } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/avatars';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';

@Component({
    selector: 'app-avatar',
    standalone:true,
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class AvatarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prismcode = prismcodeData;
}

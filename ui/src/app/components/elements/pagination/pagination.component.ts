import { Component, OnInit } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/pagination'
const FILTER_PAG_REGEX = /[^0-9]/g;
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
@Component({
    selector: 'app-pagination',
    standalone:true,
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class PaginationComponent  {
  page = 2;
  page0 = 3;
  page1 = 1;
  page2 = 3;
  page3 = 1;
  page5 = 8;
  page6 = 6;
  page7 = 3;
  page8 = 8;
  page9 = 5;
  pagef = 7;
  pageactive1 = 2;
  pageactive = 2;
  pages2=5;
  pageA=5;
  prismCode = prismcodeData;

 

	getPageSymbol(current: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
	}

	selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}
  pagest4 = 3;
	isDisabled = true;

	toggleDisabled() {
		this.isDisabled = !this.isDisabled;
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

}

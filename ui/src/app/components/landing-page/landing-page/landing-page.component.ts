import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
// import * as switcher from '../../../shared/componets/switcher/switcher';
import Swiper from 'swiper';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TapToTopComponent } from '../../../shared/componets/tap-to-top/tap-to-top.component';
import { CsLandingCard1Component } from 'src/app/_cs/reusable-landing-card/cs-landing-card1/cs-landing-card1.component';
import { CsLandingCard2Component } from 'src/app/_cs/reusable-landing-card/cs-landing-card2/cs-landing-card2.component';
import { NgbAccordionComponent } from 'src/app/_cs/cs-reusable-plugins/ngb-accordion/ngb-accordion.component';
import { AppStateService } from 'src/app/shared/services/app-state.service';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
    selector: 'app-landing-page',
    standalone:true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [RouterLink,NgbModule,CommonModule,ColorPickerModule,CsLandingCard1Component,CsLandingCard2Component,TapToTopComponent,NgbAccordionComponent]  
})
export class LandingPageComponent { 
  panels = [
    'Where can I subscribe to your newsletter?',
    'Where can in edit my address?',
    ' What are your opening hours?',
    ' Do I have the right to return an item?',
    ' General Terms & Conditions (GTC)',
    'Do I need to create an account to make an order?',
  ];
  panels1 = [
    'General Terms & Conditions (GTC)',
    ' Do I need to create an account to make an order??',
    ' Where can I subscribe to your newsletter?',
    ' Where can in edit my address?',
    ' What are your opening hours?',
    ' Do I have the right to return an item?',
  ];

  basicAccordions=[
    { 
      title: 'Where can I subscribe to your newsletter?',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: 'Where can in edit my address?',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingFour', 
        collapseId: 'collapseFour' ,
        collapsed: true
       },
       {
        title: 'General Terms & Conditions (GTC)', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingFive', 
        collapseId: 'collapseFive' ,
        collapsed: true
       },
       {
        title: 'Do I need to create an account to make an order?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingSix', 
        collapseId: 'collapseSix' ,
        collapsed: true
       }
  ]
  basicAccordions1=[
    {
      title: 'General Terms & Conditions (GTC)', 
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: true
     },
     {
      title: 'Do I need to create an account to make an order?', 
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingTwo', 
      collapseId: 'collapseTwo',
      collapsed: true
     },
     { 
      title: 'Where can I subscribe to your newsletter?',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingThree', 
      collapseId: 'collapseThree' ,
      collapsed: true
     },
    {
       title: 'Where can in edit my address?',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingFour', 
       collapseId: 'collapseFour' ,
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingFive', 
       collapseId: 'collapseFive' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingSix', 
        collapseId: 'collapseSix' ,
        collapsed: false
       },
  ]
  layoutSub: Subscription;
  isOpen: any;
    static routes: any;

  constructor(
    public renderer: Renderer2,
    public SwitcherService: SwitcherService,
    private el: ElementRef,
    private elementRef: ElementRef,
    private appStateService: AppStateService,
  ) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
    this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
    this.renderer.setAttribute(htmlElement, 'data-menu-position', 'fixed');
    // this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
    this.renderer.removeAttribute(htmlElement, 'data-header-styles');
    this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
    this.renderer.removeAttribute(htmlElement, 'dir');
    this.renderer.removeAttribute(htmlElement, 'loader');
 
    this.layoutSub = SwitcherService.changeEmitted.subscribe((value) => {
      //click to open switcher
      if (value) {
        this.isOpen = document.querySelector('.switcher');
        this.isOpen.classList.value.includes('show');
        if (this.isOpen == !this.isOpen) {
          this.renderer.removeClass(this.switcher.nativeElement, 'show');
        } else {
          this.renderer.addClass(this.switcher.nativeElement, 'show');
        }
      } else {
        this.renderer.removeClass(
          this.switcher.nativeElement.firstElementChild,
          'show'
        );
        this.renderer.setStyle(
          this.switcher.nativeElement.firstElementChild,
          'show',
          '-270px'
        );
        value = false;
      }
    });
  }

   ngOnInit(): void {

    //  switcher.localStorageBackUp();
     const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
     this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
     
    if (localStorage.getItem('valexHeader') == 'dark') {
      document.querySelector('html')?.setAttribute('data-theme-mode', 'dark');
    } else if (localStorage.getItem('valexHeader') == 'light') {
      document.querySelector('html')?.setAttribute('data-theme-mode', 'light');
    }

    this.renderer.removeAttribute(htmlElement, 'style');
    // this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
   }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);

      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
  }

  isDataToggled = false;

  expande = false;
  expande1 = false;
  expande2 = false;

  @ViewChild('dropmenu', { static: true }) dropmenu!: ElementRef;

  toggleExpand(): void {
    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }

  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');

    this.renderer.removeClass(this.switcher.nativeElement, 'show');
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
  }

  @ViewChild('switcher', { static: false }) switcher!: ElementRef;

  onClose() {
    this.renderer.removeClass(this.switcher.nativeElement, 'show');
  }

  body = document.querySelector('body');

 // Theme color Mode
 themeChange(type: string, type1: string) {
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
  localStorage.setItem('valexHeader', type1);
  this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
  localStorage.setItem('valexMenu', type1);
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
  localStorage.setItem('valexdarktheme', type1);

  // if (localStorage.getItem('valexHeader') == 'light') {
  //   this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute(
  //     'style'
  //   );
  // }
  
  // if (localStorage.getItem('valexdarktheme') == 'light') {
  //   this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute(
  //     'style'
  //   );
  //   localStorage.removeItem('bodyBgRGB')
  //   localStorage.removeItem('bodylightRGB')
  // }
  // this.primary(type)
  
}

  //  Directions
  DirectionsChange(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'dir', type);
    localStorage.setItem('dir', type);
     if (localStorage.getItem('dir') == 'ltr') {
      localStorage.removeItem('dir');
    }
    if (localStorage.getItem('dir') == 'rtl') {
      this.renderer.setAttribute(htmlElement, 'dir', type);
    }
  }

  //Theme Primary
  primary(type: string) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
      '--primary-rgb',
      type
    );
    localStorage.setItem('CS-primary-mode', type);
    localStorage.removeItem('valexlight-primary-color');
  }
  //Theme Primary
  updateprimary(themePrimary: string) {
    this.appStateService.updateState({ themePrimary });
  }

  
  color1 = '#845adf';
  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;
  
    const dynamicPrimaryLight = document.querySelectorAll(
      'button.pcr-button'
    );
  
    this.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
  
    localStorage.setItem('xintra-primary-mode', this.hexToRgba(this.color1) || '');
    localStorage.setItem('xintralight-mode', 'true');
    this.body?.classList.remove('transparent-mode');
  
    // Adding
    this.body?.classList.add('light-mode');
  
    // Removing
    this.body?.classList.remove('dark');
    this.body?.classList.remove('bg-img1');
  
  }
  handleThemeUpdate(cssVars: any) {
    const root: any = document.querySelector(':root');
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  // to check the value is hexa or not
   isValidHex = (hexValue: any) =>
    /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  
   getChunksFromString = (st: any, chunkSize: any) =>
    st.match(new RegExp(`.{${chunkSize}}`, 'g'));
  // convert hex value to 256
   convertHexUnitTo256 = (hexStr: any) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  hexToRgba(hexValue: any) {
    if (!this.isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = this.getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
    return `${r}, ${g} ,${b}`;
  }

  dynamicLightPrimaryColor(primaryColor: any, color: any) {
    primaryColor.forEach((item: any) => {
      const cssPropName1 = `--primary-rgb`;
  
      this.handleThemeUpdate({
        [cssPropName1]: this.hexToRgba(color),
      });
    });
  }
  //swiper
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 3,
		  spaceBetween: 10,
		 pagination:{
      clickable:true
     },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			500: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1400: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			
		  },
	  });
  }

  //reset switcher

  reset() {
    localStorage.clear();
    const html: any =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const body: any = document.querySelector('body');
    html.style = '';
    html.setAttribute('class', 'light');
    html.setAttribute('dir', 'ltr');
    html.setAttribute('data-header-styles', 'light');
    html.setAttribute('data-menu-styles', 'light');
    html.removeAttribute('data-theme-mode', 'light');
    html.setAttribute('data-nav-style', 'menu-click');
    body.removeAttribute('class');
    // html.removeAttribute('data-nav-style');
    // document.querySelector('#style')?.setAttribute('href', 'src/assets/scss/bootstrap.scss');
    const lightclickchecked = document.getElementById(
      'switcher-light-theme'
    ) as HTMLInputElement;
    if (lightclickchecked) {
      lightclickchecked.checked = true;
    }
    const ltrclickchecked = document.getElementById(
      'myonoffswitch54'
    ) as HTMLInputElement;
    if (ltrclickchecked) {
      ltrclickchecked.checked = true;
    }
  }

  ngOnDestroy(): void {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.removeAttribute(htmlElement, 'data-nav-style', 'menu-click');
    this.renderer.removeAttribute(htmlElement, 'data-menu-position', 'fixed');

    // this.renderer.removeAttribute(htmlElement, 'style');
    // this.renderer.removeAttribute(htmlElement, 'data-theme-mode', 'light');
  }

  public localdata = localStorage;

  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }

  cards = [
    {
      title: 'Quality & Clean Code',
      description: 'The CS admin code is maintained very cleanly and well-structured with proper comments.',
      cardClass: 'main-features-4 active',
      icon:`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"> <circle cx="64" cy="64" r="64" fill="#42A3DB"></circle> <path fill="#347CBE" d="M85.5 26.6 66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z"></path> <path fill="#CD2F30" d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z"></path> <path fill="#F04D45" d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z"> </path> <path fill="#FFF" d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z"></path><path fill="#FFCD0A" d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z"></path><path fill="#FFF" d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z"></path></svg>`
    },
    {
      title: 'Multiple Demos',
      description: 'We included multiple demos, preview video, and screen shots to give a quick overview of our CS admin template.',
      cardClass: 'main-features-2',
      icon:`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"> <circle cx="64" cy="64" r="63.5" fill="#54C0EB"></circle><path fill="#84DBFF" d="M19.2,109c11.5,11.4,27.3,18.5,44.8,18.5c17.5,0,33.3-7.1,44.8-18.5H19.2z"></path> <rect width="19.6" height="10.4" x="54.2" y="92.7" fill="#FFF"></rect><rect width="19.6" height="2.3" x="54.2" y="92.7" fill="#E6E9EE"></rect> <path fill="#E6E9EE" d="M82.2,109H45.8l0,0c0-3.3,2.7-6,6-6h24.4C79.5,103.1,82.2,105.7,82.2,109L82.2,109z"></path><path fill="#324A5E" d="M103,92.7H25c-2.4,0-4.4-2-4.4-4.4V34.7c0-2.4,2-4.4,4.4-4.4h78c2.4,0,4.4,2,4.4,4.4v53.7   C107.4,90.7,105.4,92.7,103,92.7z"></path><path fill="#FFF" d="M20.6,84v4.4c0,2.4,1.9,4.3,4.3,4.3H103c2.4,0,4.3-1.9,4.3-4.3V84H20.6z"></path><rect width="80.3" height="46.9" x="23.9" y="33.4" fill="#FFF"></rect><circle cx="100.3" cy="88.3" r="2" fill="#FF7058"></circle><circle cx="94.7" cy="88.3" r="2" fill="#4CDBC4"></circle><circle cx="89.1" cy="88.3" r="2" fill="#54C0EB"></circle><rect width="9.7" height="27.7" x="32.3" y="46.7" fill="#ACB3BA"></rect><rect width="9.7" height="15.8" x="45.7" y="58.7" fill="#4CDBC4"></rect><rect width="9.7" height="23.1" x="59.1" y="51.3" fill="#FFD05B"></rect><rect width="9.7" height="35.7" x="72.6" y="38.7" fill="#84DBFF"></rect><rect width="9.7" height="8.1" x="86" y="66.3" fill="#FF7058"></rect> </svg>`
    },
    {
      title: 'Widgets',
      description: ' 30+ widgets are included in this template. Please check out the best option that suits you. ',
      cardClass: 'main-features-4 active',
      icon:`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#54C0EB"></circle><path fill="#FFF" d="M42.2,96H23.6c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C45.1,94.7,43.8,96,42.2,96z"></path><rect width="18.7" height="36.8" x="23.6" y="35.8" fill="#4CDBC4"></rect><circle cx="32.9" cy="83.9" r="7.2" fill="#E6E9EE"></circle><circle cx="32.9" cy="83.9" r="5" fill="#324A5E"></circle><path fill="#FFF" d="M68.8,96H50.2c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C71.6,94.7,70.4,96,68.8,96z"></path><rect width="18.7" height="36.8" x="50.1" y="35.8" fill="#FF7058"></rect><circle cx="59.5" cy="83.9" r="7.2" fill="#E6E9EE"></circle><circle cx="59.5" cy="83.9" r="5" fill="#324A5E"></circle><path fill="#FFF" d="M109,92.7l-18,4.6c-1.5,0.4-3.1-0.5-3.5-2.1L73.2,38.7c-0.4-1.5,0.5-3.1,2.1-3.5l18-4.6   c1.5-0.4,3.1,0.5,3.5,2.1l14.3,56.5C111.5,90.8,110.6,92.4,109,92.7z"></path><rect width="18.7" height="36.8" x="80.4" y="36.1" fill="#FFD05B" transform="rotate(-14.193 89.778 54.551)"></rect><circle cx="97" cy="83.2" r="7.2" fill="#E6E9EE"></circle><circle cx="97" cy="83.2" r="5" fill="#324A5E"></circle> </svg>`
    },
    {
      title: 'Validation Forms',
      description: ' Different types of “Form Validation” are implemented in this CS admin template and used strict validation rules. ',
      cardClass: 'main-features-4 active',
      icon:`<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#FFD05B"></circle><path fill="#FFF" d="M30,103.8l0-79.7c0-1.8,1.5-3.3,3.3-3.3h50.1l0,11.4c0,1.8,1.5,3.3,3.3,3.3H98l0,68.3   c0,1.8-1.5,3.3-3.3,3.3H33.3C31.5,107.1,30,105.6,30,103.8z"></path><path fill="#E6E9EE" d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4H86.6c-1.8,0-3.3-1.5-3.3-3.3L83.3,20.9z"></path><path fill="#CED5E0" d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4L83.3,20.9z"></path><rect width="54.6" height="2.4" x="36.7" y="50.7" fill="#E6E9EE"></rect><rect width="54.6" height="2.4" x="36.7" y="58.2" fill="#E6E9EE"></rect><rect width="54.6" height="2.4" x="36.7" y="65.8" fill="#E6E9EE"></rect><rect width="54.6" height="2.4" x="36.7" y="73.4" fill="#E6E9EE"></rect><rect width="23.5" height="2.4" x="67.8" y="80.9" fill="#84DBFF"></rect><rect width="23.5" height="2.4" x="67.8" y="88.5" fill="#84DBFF"></rect><rect width="54.6" height="2.4" x="36.7" y="43.1" fill="#E6E9EE"></rect><rect width="29.6" height="2.4" x="36.7" y="35.6" fill="#84DBFF"></rect><path fill="#FF7058" d="M41.1,83.3c-4.4,4.4-4.4,11.5,0,15.9s11.5,4.4,15.9,0c4.4-4.4,4.4-11.5,0-15.9   C52.6,78.9,45.5,78.9,41.1,83.3z M41.9,84.1c3.4-3.4,8.7-3.8,12.6-1.3l-1.6,1.6c-3-1.7-6.9-1.3-9.5,1.2c-2.6,2.6-3,6.5-1.2,9.5   l-1.6,1.6C38.1,92.8,38.5,87.5,41.9,84.1z M43.1,94.3c-1.3-2.5-0.9-5.7,1.2-7.7c2.1-2.1,5.2-2.5,7.7-1.2L43.1,94.3z M54.9,88.2   c1.3,2.5,0.9,5.7-1.2,7.7c-2.1,2.1-5.2,2.5-7.7,1.2L54.9,88.2z M56.1,98.3c-3.4,3.4-8.7,3.8-12.6,1.3l1.6-1.6   c3,1.7,6.9,1.3,9.5-1.2c2.6-2.6,3-6.5,1.2-9.5l1.6-1.6C60,89.6,59.5,94.9,56.1,98.3z"></path> </svg>`
    },
  ]

  cards2 = [
    {
      title: 'Projects',
      icon: 'fe fe-grid',
      count: '120+',
      description: 'Projects'
    },
    {
      title: 'Clients',
      icon: 'fe fe-user-plus',
      count: '20K+',
      description: 'Clients'
    },
    {
      title: 'Employees',
      icon: 'fe fe-users',
      count: '854',
      description: 'Employees'
    },
    {
      title: 'Years of Experience',
      icon: 'fe fe-calendar',
      count: '5+',
      description: 'Years of Experience'
    }
  ];

  testimonial = [
    {
      name: 'Json Taylor',
      role: 'Web Developer',
      image: './assets/images/faces/11.jpg',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet.',
      rating: 4.5
    },
    {
      name: 'Harry Linson',
      role: 'CEO',
      image: './assets/images/faces/15.jpg',
      testimonial: 'Nulla in nunc eu justo varius bibendum ac quis metus. Phasellus varius aliquam lorem quis sem vitae, pellentesque.',
      rating: 4.5
    },
    {
      name: 'Mathew Brown',
      role: 'Project Manager',
      image: './assets/images/faces/9.jpg',
      testimonial: 'In nec elit nec risus varius cursus vitae eget augue. Vestibulum bibendum, diam nec elementum imperdiet mollis in lacinia vitae.',
      rating: 4.5
    },
    {
      name: 'Ronne Gally',
      role: 'Backend Developer',
      image: './assets/images/faces/8.jpg',
      testimonial: 'Phasellus varius aliquam lorem ut fringilla. Proin lobortis ipsum in libero elementum rhoncus augue enim ac quam.',
      rating: 4.5
    },
    {
      name: 'Jim Carilett',
      role: 'UI Developer',
      image: './assets/images/faces/7.jpg',
      testimonial: 'Vestibulum bibendum, diam nec elementum imperdiet, nisi odio mattis metus, ac ullamcorper Cras nec aliquet sem.',
      rating: 4.5
    },
    {
      name: 'Kami Johnson',
      role: 'Web Developer',
      image: './assets/images/faces/6.jpg',
      testimonial: 'Nullam dignissim velit ac libero varius facilisis. Pellentesque habitant morbi tristique senectus eget lorem metus.',
      rating: 4.5
    },
    {
      name: 'Marina Rotior',
      role: 'UI Designer',
      image: './assets/images/faces/3.jpg',
      testimonial: 'Sed dapibus risus eu nibh aliquet, et sodales libero vulputate. Nullam lacinia diam sem Sed dapibus risus eu nib.',
      rating: 4.5
    },
    {
      name: 'Elizabeth',
      role: 'Backend Developer',
      image: './assets/images/faces/2.jpg',
      testimonial: 'Nullam ultrices sem ut gravida ultricies. Suspendisse vitae felis sit amet dolor tempor lacinia Sed in lorem convallis, tempus nisi vel.',
      rating: 4.5
    },
    {
      name: 'Williamson',
      role: 'UI Developer',
      image: './assets/images/faces/1.jpg',
      testimonial: 'Curabitur auctor purus et laoreet molestie. Sed eleifend scelerisque posuere. In ac vehicula turpis acinia diam sem aliquam lorem.',
      rating: 4.5
    }
  ];

     // Method to get full stars
  getFullStars(rating: number): number[] {
    return new Array(Math.floor(rating));  // Create an array of full stars based on the rating
  }

  // Method to check if there's a half star
  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;  // Check if there's a fractional part for half star
  }
}

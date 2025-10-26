import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { CsPagesPricing1Component } from 'src/app/_cs/reusable-pages/cs-pages-pricing1/cs-pages-pricing1.component';
import { CsPagesPricing2Component } from 'src/app/_cs/reusable-pages/cs-pages-pricing2/cs-pages-pricing2.component';
import { CsPagesPricing3Component } from 'src/app/_cs/reusable-pages/cs-pages-pricing3/cs-pages-pricing3.component';

@Component({
    selector: 'app-pricing',
    standalone:true,
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
    imports: [PageHeaderComponent,CsPagesPricing1Component,CsPagesPricing2Component,CsPagesPricing3Component] 
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pricingPlans = [
    {
      planName: 'Basic',
      price: '$10',
      features: ['2 Free Domain Name', '2 One-Click Apps', '1 Databases', 'Money Back Guarantee', '24/7 Support'],
      buttonText: 'Buy Now',
      buttonColor: 'btn-primary'
    },
    {
      planName: 'Premium',
      price: '$49',
      features: ['3 Free Domain Name', '5 One-Click Apps', '3 Databases', 'Money Back Guarantee', '24/7 Support'],
      buttonText: 'Buy Now',
      buttonColor: 'btn-pink'
    },
    {
      planName: 'Enterprise',
      price: '$99',
      features: ['10 Free Domain Name', '10 One-Click Apps', '8 Databases', 'Money Back Guarantee', '24/7 Support'],
      buttonText: 'Buy Now',
      buttonColor: 'btn-warning'
    },
    {
      planName: 'Unlimited',
      price: '$139',
      features: ['12 Free Domain Name', '10 One-Click Apps', '6 Databases', 'Money Back Guarantee', '24/7 Support'],
      buttonText: 'Buy Now',
      buttonColor: 'btn-danger'
    }
  ];
  pricingPlans1 = [
    {
      planName: 'Free',
      price: '$0',
      features: [
        { feature: '4 Ads', isAvailable: true },
        { feature: '30 days', isAvailable: true },
        { feature: 'Private Messages', isAvailable: false },
        { feature: 'Urgent Ads', isAvailable: false }
      ],
      buttonText: 'Choose plan',
      buttonClass: 'btn-primary',
      cardStatusClass: ''
    },
    {
      planName: 'Unlimited',
      price: '$150',
      features: [
        { feature: 'Unlimited Ads', isAvailable: true },
        { feature: '365 Days', isAvailable: true },
        { feature: 'Private Messages', isAvailable: true },
        { feature: 'Urgent Ads', isAvailable: true }
      ],
      buttonText: 'Choose plan',
      buttonClass: 'btn-warning',
      cardStatusClass: ''
    },
    {
      planName: 'Premium',
      price: '$65',
      features: [
        { feature: '50 Ads', isAvailable: true },
        { feature: '60 Days', isAvailable: true },
        { feature: 'Private Messages', isAvailable: false },
        { feature: 'Urgent Ads', isAvailable: false }
      ],
      buttonText: 'Choose plan',
      buttonClass: 'btn-success',
      cardStatusClass: 'bg-success'
    },
    {
      planName: 'Enterprise',
      price: '$100',
      features: [
        { feature: '100 Ads', isAvailable: true },
        { feature: '180 Days', isAvailable: true },
        { feature: 'Private Messages', isAvailable: true },
        { feature: 'Urgent Ads', isAvailable: false }
      ],
      buttonText: 'Choose plan',
      buttonClass: 'btn-danger',
      cardStatusClass: ''
    }
  ];
  pricingPlans2 = [
    {
      planName: 'Personal',
      price: '$15',
      features: ['2 Free Domain Name', '3 One-Click Apps', '1 Databases', 'Money Back Guarantee', '24/7 support'],
      buttonText: 'Purchase Now!',
      buttonColor: 'btn-primary',
      panelColor: 'bg-primary'
    },
    {
      planName: 'Team',
      price: '$25',
      features: ['3 Free Domain Name', '4 One-Click Apps', '2 Databases', 'Money Back Guarantee', '24/7 support'],
      buttonText: 'Purchase Now!',
      buttonColor: 'btn-warning',
      panelColor: 'bg-warning'
    },
    {
      planName: 'Business',
      price: '$99',
      features: ['5 Free Domain Name', '8 One-Click Apps', '2 Databases', 'Money Back Guarantee', '24/7 support'],
      buttonText: 'Purchase Now!',
      buttonColor: 'btn-success',
      panelColor: 'bg-success'
    },
    {
      planName: 'Corporate',
      price: '$35',
      features: ['4 Free Domain Name', '6 One-Click Apps', '2 Databases', 'Money Back Guarantee', '24/7 support'],
      buttonText: 'Purchase Now!',
      buttonColor: 'btn-danger',
      panelColor: 'bg-danger'
    }
  ];
}

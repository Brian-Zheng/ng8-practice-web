import { Component, OnInit } from '@angular/core';

import { appPath } from '../const/app-path.const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  path = appPath;

  commodityList = [
    {
      title: "草莓馬卡龍",
      dollarSign: "NT$",
      dollar: 250,
      img: "/assets/images/others/brenda-godinez-367708-unsplash.jpg"
    },
    {
      title: "焦糖馬卡龍",
      dollarSign: "NT$",
      dollar: 200,
      img: "/assets/images/others/food-photographer-jennifer-pallian-650641-unsplash.jpg"
    },
    {
      title: "某種甜點?",
      dollarSign: "NT$",
      dollar: "???",
      img: "/assets/images/others/brooke-lark-96398-unsplash.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

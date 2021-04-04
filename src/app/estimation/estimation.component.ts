import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimationModel } from '../_model/estimation.model';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {
  model: EstimationModel = {
    totalprice: 0,
    Discount: 2,
    goldprice: 0,
    goldweight: 0
  }
  TotalPrice: number;
  Discountprice: number;
  userName: string;
  customerType: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.userName = param["userName"];
      this.customerType = param["customerType"];

      if (this.customerType == 'Privileged')
        this.model.Discount = 2;
    });
  }

  CalculateTotalPrice() {
    this.TotalPrice = (this.model.goldprice * this.model.goldweight);
    if (this.customerType == 'Privileged') {
      this.Discountprice = (this.TotalPrice * this.model.Discount) / 100;
      this.TotalPrice = this.TotalPrice - this.Discountprice;
    }
    this.model.totalprice = this.TotalPrice;
  }

  printtoscreen()
  {
    alert('The Calculated Price is : '+ this.model.totalprice);
  }

}

import { Component, OnInit } from '@angular/core';
import { PaymentDetailsFormComponent } from "./payment-details-form/payment-details-form.component";
import { PaymentDetailService } from '../services/payment-detail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailsFormComponent, CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService){}
  ngOnInit(): void {
    this.service.refreshList();
  }


}

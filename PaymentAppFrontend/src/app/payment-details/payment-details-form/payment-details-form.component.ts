import { Component } from '@angular/core';
import { PaymentDetailService } from '../../services/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../services/payment-detail.model';

@Component({
  selector: 'app-payment-details-form',
  imports: [FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css'
})
export class PaymentDetailsFormComponent {

  constructor(public service: PaymentDetailService){
    
  }

  onSubmit(form: NgForm){
    this.service.postPaymentDetails().subscribe({
      next: res => {this.service.list = res as PaymentDetail[];
                    this.service.resetForm(form);
      },
      error: err=>{console.log(err)}
    })
  }

}

import { AuthService } from './../payservices/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {


  constructor(private auth:AuthService) { }

  ngOnInit() {}

 options = {
    "key": "rzp_test_DwM0kfYZGF11TX", // Enter the Key ID generated from the Dashboard
    "amount": "500000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
rzp1: any;
pay(){
  this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
  this.rzp1.open();

}

}

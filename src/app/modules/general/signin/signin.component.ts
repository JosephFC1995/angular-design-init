import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  checkoutForm;
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      usuario: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {

    console.warn('Your order has been submitted', customerData);
  }

}

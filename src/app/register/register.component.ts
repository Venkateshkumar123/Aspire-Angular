import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata = {
    name: "",
    email: "",
    password: ""
  };
  submit = false;
  errorMessage = "";
  loading = false;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email validation regex

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit() {
    this.submit = true;
    if (this.formdata.name && this.formdata.email && this.formdata.password) {
      if (!this.emailRegex.test(this.formdata.email)) {
        this.errorMessage = "Invalid email format.";
      } else if (this.formdata.password.length < 8) {
        this.errorMessage = "Password should be at least 8 characters long.";
      } else {
        this.loading = true;
        // Call register service
        this.auth
          .register(this.formdata.name, this.formdata.email, this.formdata.password)
          .subscribe({
            next: data => {
              // Store token from response data
              this.auth.storeToken(data.idToken);
              console.log('Registered idtoken is ' + data.idToken);
              this.auth.canAuthenticate();
            },
            error: data => {
              if (data.error.error.message == "INVALID_EMAIL") {
                this.errorMessage = "Invalid Email!";
              } else if (data.error.error.message == "EMAIL_EXISTS") {
                this.errorMessage = "Email already exists!";
              } else {
                this.errorMessage = "Unknown error occurred when creating this account!";
              }
            }
          }).add(() => {
            this.loading = false;
            console.log('Register process completed!');
          });
      }
    }
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from '../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  
  constructor(private fb: FormBuilder, private userService: userService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.userService.login(this.loginForm.value).subscribe(
        (        response: any) => {
          this.isLoading = false;
          console.log('Login successful', response);
          // Handle successful login here, such as redirecting to a different page
        },
        (        error: any) => {
          this.isLoading = false;
          console.error('Login failed', error);
          // Handle login error here, such as showing an error message
        }
      );
    }
  }
}


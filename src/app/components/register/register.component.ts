import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      platform: [0],
      deviceId: ['web']
    });
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        if (res.status === false && res.message === 'User already exist, kindly Login an account') {
          this.message = res.message;
          setTimeout(() => this.router.navigate(['/login']), 2000);
        } else {
          this.message = 'Registration successful! Redirecting to Dashboard...';
          setTimeout(() => this.router.navigate(['/admin-dashboard']), 2000);
        }
      },
      error: (err) => {
        this.message = 'Something went wrong!';
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  hidePassword = true;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  message = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const body = { ...this.loginForm.value, platform: 0, deviceId: 'web' };

    this.authService.login(body).subscribe({
      next: (res) => {
        if (res.status) {
          localStorage.setItem('token', res.token);
          this.message = 'Login successful!';
          setTimeout(() => this.router.navigate(['/admin-dashboard']), 2000);
        } else {
          this.message = 'Login failed. Please check your credentials.';
        }
      },
      error: () => this.message = 'Login failed. Try again.'
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}

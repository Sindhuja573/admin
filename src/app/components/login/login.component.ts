import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      platform: [0],
      deviceId: ['web']
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        if (res.status) {
          this.message = 'Login successful! Redirecting to Dashboard...';
          setTimeout(() => this.router.navigate(['/admin-dashboard']), 2000);
        } else {
          this.message = 'Invalid credentials!';
        }
      },
      error: (err) => {
        this.message = 'Something went wrong!';
      }
    });
  }
}

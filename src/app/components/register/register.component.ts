import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  hidePassword = true;

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    platform: [0],
    deviceId: ['web']
  });

  message = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        if (res.status === false && res.message.includes('already exist')) {
          this.message = 'User already exists. Please login.';
        } else {
          this.message = 'Registration successful!';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        }
      },
      error: () => this.message = 'Registration failed. Try again.'
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}

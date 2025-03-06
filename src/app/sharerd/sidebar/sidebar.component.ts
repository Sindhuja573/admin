import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showMasters = true;

  constructor(private router: Router) { }  // Inject Router

  toggleMasters() {
    this.showMasters = !this.showMasters;
  }

  logout() {
    // Clear any stored session data (optional)
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to Sign In page
    this.router.navigate(['/login']);
  }
}

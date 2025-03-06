import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyEnrollmentComponentComponent } from './sharerd/company-enrollment-component/company-enrollment-component.component';
import { RoleCategoriesComponentComponent } from './sharerd/role-categories-component/role-categories-component.component';
import { SkillsetcategoriesComponent } from './sharerd/skillsetcategories/skillsetcategories.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'masters/company-enrollment', component: CompanyEnrollmentComponentComponent },
 
  { path: 'masters/role-categories', component: RoleCategoriesComponentComponent },
  {path:'masters/skillset-categories',component:SkillsetcategoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

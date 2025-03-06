import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './sharerd/sidebar/sidebar.component';
import { CompanyEnrollmentComponentComponent } from './sharerd/company-enrollment-component/company-enrollment-component.component';
import { RoleCategoriesComponentComponent } from './sharerd/role-categories-component/role-categories-component.component';
import { SkillsetcategoriesComponent } from './sharerd/skillsetcategories/skillsetcategories.component';
import { SkillsetCategoryComponent } from './components/skillset-category/skillset-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    SidebarComponent,
    CompanyEnrollmentComponentComponent,
    RoleCategoriesComponentComponent,
    SkillsetcategoriesComponent,
    SkillsetCategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

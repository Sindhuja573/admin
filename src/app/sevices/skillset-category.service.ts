import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillsetCategory } from '../model/skillset-category.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsetCategoryService {
  private apiUrl = 'https://dev-skiller-api.azurewebsites.net/api/AdminMaster/GetAllSkillsetCategories'; // Replace with your real API URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<SkillsetCategory[]> {
    return this.http.get<SkillsetCategory[]>(this.apiUrl);
  }

  create(data: SkillsetCategory): Observable<SkillsetCategory> {
    return this.http.post<SkillsetCategory>(this.apiUrl, data);
  }

  update(id: number, data: SkillsetCategory): Observable<SkillsetCategory> {
    return this.http.put<SkillsetCategory>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { SkillsetCategoryService } from '../../sevices/skillset-category.service';
import { SkillsetCategory } from '../../model/skillset-category.model';

@Component({
  selector: 'app-skillsetcategories',
  templateUrl: './skillsetcategories.component.html',
  styleUrl: './skillsetcategories.component.css'
})
export class SkillsetcategoriesComponent implements OnInit{

  skillsetCategories: SkillsetCategory[] = [];
  searchTerm: string = '';

  constructor(private skillsetService: SkillsetCategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.skillsetService.getAll().subscribe(data => this.skillsetCategories = data);
  }

  addCategory() {
    // logic for adding
  }

  editCategory(category: SkillsetCategory) {
    // logic for edit (open dialog with prefilled data)
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.skillsetService.delete(id).subscribe(() => this.loadCategories());
    }
  }

}

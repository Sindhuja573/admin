import { Component, OnInit } from '@angular/core';
import { SkillsetCategoryService } from '../../sevices/skillset-category.service';
import { SkillsetCategory } from '../../model/skillset-category.model';

@Component({
  selector: 'app-skillset-category',
  templateUrl: './skillset-category.component.html',
  styleUrls: ['./skillset-category.component.css']
})
export class SkillsetCategoryComponent implements OnInit {
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

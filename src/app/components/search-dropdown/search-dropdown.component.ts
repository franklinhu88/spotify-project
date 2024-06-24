import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRow } from '../../models/search.row.model';

@Component({
  selector: 'app-search-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-dropdown.component.html',
  styleUrl: './search-dropdown.component.css',
})
export class SearchDropdownComponent {
  @Input() items: SearchRow[] = [];
  @Input() currentType: string = "";
}
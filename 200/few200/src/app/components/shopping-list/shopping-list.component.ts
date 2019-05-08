import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './models';
import { Observable } from 'rxjs';
import { ShoppingDataService } from './shopping-data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  listHeading = 'By this stuff';
  // items: ShoppingListItem[] = [
  //   { id: 1, description: 'Hair Gel', purchased: true },
  //   { id: 2, description: 'Toothpaste', purchased: false }
  // ];
  items$: Observable<ShoppingListItem[]>;
  nextId = 3;
  constructor(private apiService: ShoppingDataService) { }

  ngOnInit() {
    this.items$ = this.apiService.getShoppingList();
  }

  onItemAdded(description: string) {
    // this.items = [
    //   {
    //     id: this.nextId++,
    //     description,
    //     purchased: false
    //   },
    //   ...this.items
    // ];
  }
}

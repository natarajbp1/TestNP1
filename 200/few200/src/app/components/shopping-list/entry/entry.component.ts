import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Output()
  itemAdded = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }
  add(item: HTMLInputElement) {
    const description = item.value;
    item.value = '';
    item.focus();
    // console.log(description);
    this.itemAdded.emit(description);
  }

}

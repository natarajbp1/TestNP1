import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookcollectionComponent } from './bookcollection.component';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [BookcollectionComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookFeature', reducers)
  ],
  exports: [BookcollectionComponent]
})
export class BookcollectionModule { }

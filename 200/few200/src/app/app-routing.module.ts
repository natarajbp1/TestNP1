import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoComponent } from './features/todo/todo.component';
import { BookcollectionComponent } from './features/bookcollection/bookcollection.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'book', component: BookcollectionComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

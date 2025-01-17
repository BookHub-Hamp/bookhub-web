import { Routes } from '@angular/router';
import { AuthorLayoutComponent } from './author-layout/author-layout.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


export const authorRoutes: Routes = [
  {
    path: '',
    component: AuthorLayoutComponent, // El layout que engloba las rutas
    children: [
      {
        path: 'books',
        component: BookListComponent,
      },
      {
        path: 'books/add',
        component: BookFormComponent,
      },
      {
        path: 'books/edit/:id',
        component: BookFormComponent,
      },
      {
        path: 'categories',
        component: CategoryListComponent,
      },
      {
        path: 'categories/add',
        component: CategoryFormComponent,
      },
      {
        path: 'categories/edit/:id',
        component: CategoryFormComponent,
      },
    ]
  }
];

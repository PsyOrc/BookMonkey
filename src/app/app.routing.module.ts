import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { HomeComponent } from '../app/home/home.component';
import { BookListComponent } from '../app/book-list/book-list.component';
import { BookDetailComponent } from '../app/book-detail/book-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:isbn',
        component: BookDetailComponent
    },
    {
        path: 'admin',
        component: BookFormComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule],
    providers: [],
})

export class AppRoutingModule {}

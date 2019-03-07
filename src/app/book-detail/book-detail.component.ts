import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'bm-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {
  book: Book = BookFactory.empty();

  getRating(num: number) {
    return new Array(num);
  }

  constructor(
    private bookStoreService: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bookStoreService.getSingle(params['isbn'])
    .subscribe(b => this.book = b);
  }

  private getIsbn() {
    return 'isbn';
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bookStoreService.remove(this.book.isbn)
        .subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    }
  }
}

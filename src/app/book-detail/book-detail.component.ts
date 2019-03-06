import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {
  book: Book;

  getRating(num: number) {
    return new Array(num);
  }

  constructor(
    private bookStoreService: BookStoreService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.book = this.bookStoreService.getSingle(params[this.getIsbn()]);
  }

  private getIsbn() {
    return 'isbn';
  }
}

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  // unser Ziel
  @Output() bookSelected = new EventEmitter<Book>();

  keyup = new EventEmitter<string>();
  foundBooks: Book[] = [];
  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.keyup
    .pipe(debounceTime(500), distinctUntilChanged(), switchMap(searchTerm => this.bookStoreService.getAllSearch(searchTerm)))
    .subscribe(books => this.foundBooks = books);
  }

}

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

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

  isLoading = false;
  foundBooks: Book[] = [];
  keyup = new EventEmitter<string>();
  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.keyup
    .pipe(debounceTime(500)
      , distinctUntilChanged()
      , tap(() => this.isLoading = true)
      , switchMap(searchTerm => this.bookStoreService.getAllSearch(searchTerm))
      , tap(() => this.isLoading = false))
    .subscribe(books => this.foundBooks = books);
  }

}

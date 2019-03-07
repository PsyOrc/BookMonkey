import { Component, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'a.bm-book-list-item',
  templateUrl: './book-list-item.component.html'
})
export class BookListItemComponent {
  @Input() book: Book;

}

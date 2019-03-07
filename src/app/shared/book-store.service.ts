import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from './book';
import { BookFactory } from './book-factory';


@Injectable()
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';
  private headers: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<Book>> {
    return this.http
      .get(`${this.api}/books`)
      .pipe(map(rawBooks => rawBooks), map(rawBook => BookFactory.formObject(rawBook))
      )      
      .pipe(catchError(this.errorHandler))
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .pipe(map(rawBooks => rawBooks), map(rawBook => BookFactory.formObject(rawBook))
      )      
      .pipe(catchError(this.errorHandler))
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), {headers: this.headers}).pipe(catchError(this.errorHandler))
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`,JSON.stringify(book), {headers: this.headers}).pipe(catchError(this.errorHandler))
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`).pipe(catchError(this.errorHandler))
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http
      .get(`${this.api}/books/search/${searchTerm}`)
      .pipe(map(rawBooks => rawBooks), map(rawBook => BookFactory.formObject(rawBook))
      )      
      .pipe(catchError(this.errorHandler))
  }
}

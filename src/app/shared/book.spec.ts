import { Book } from './book';
import { Thrumbnail } from '../shared/thrumbnail';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(
      '9783864903571',
      'Angular',
      ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'gregor Woiwode'],
      new Date(2107,3,1),
      'Grundlagen und weiteres Blabla für Angular',
      5,
      [new Thrumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
      'weiterer extra text blabla...'
    ), ).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Book } from '../models/book';
import * as firebase from 'firebase';

@Injectable()
export class BooksService {
   books: Book[] = [];
   booksSubject = new Subject<Book[]>();

  emitBooks() {
    this.booksSubject.next(this.books);
  }
  saveBooks() {
    firebase
      .database()
      .ref('/books')
      .set(this.books);
  }

  getBooks() {
    firebase
      .database()
      .ref('/books')
      .on('value', data => {
        // recupere les nouveau book en tant réel
        this.books = data.val() ? data.val() : [];
        this.emitBooks();
      });
  }

  getSingleBook(id: number) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref('/books/' + id)
        .once('value')
        .then(
          //recupère un seul book
          data => {
            resolve(data.val());
          },
          error => {
            reject(error);
          }
        );
    });
  }
  constructor() {
    this.getBooks();
  }
  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(bookEl => {
      if (bookEl === book) {
        return true;
      }
    });
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
}

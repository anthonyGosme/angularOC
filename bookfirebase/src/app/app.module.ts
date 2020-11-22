import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { BookListComponent } from './book-list/book-list.component';;
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from './service/books.service';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { SingleBookComponent } from './book-list/single-book/single-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [BrowserModule],
  providers: [BooksService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

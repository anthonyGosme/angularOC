import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './service/appareilService';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/authService';
import { SimpleAppareilComponent } from './simple-appareil/simple-appareil.component';
import { FourOFourComponent } from './four-ofour/four-ofour.component';
import { AuthGuard } from './service/authGuardService';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/UserService';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  {
    path: 'appareils',
    canActivate: [AuthGuard],
    component: AppareilViewComponent
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuard],
    component: SimpleAppareilComponent
  },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'user',  component: UserListComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: '', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'not-found', component: FourOFourComponent },
  { path: '**', redirectTo: '/not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SimpleAppareilComponent,
    FourOFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './service/appareilService';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/authService';
import { SimpleAppareilComponent } from './simple-appareil/simple-appareil.component';
import { FourOFourComponent } from './four-ofour/four-ofour.component';
import { AuthGuard } from './service/authGuardService';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [
  { path: 'appareils',canActivate:[AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate:[AuthGuard], component: SimpleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate:[AuthGuard], component: EditAppareilComponent },
  { path: '',canActivate:[AuthGuard], component: AppareilViewComponent },
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
    EditAppareilComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

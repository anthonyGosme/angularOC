import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject) => {
      const date = new Date() ;
      setTimeout(() => {
        resolve(date)
      }, 2000
      )
    }
  );
  
  isAuth: boolean = false;
  appareils = [
    { name: 'machine à laver', status: 'allumé' },
    { name: 'télévision', status: 'allumé' },
    { name: 'ordinateur', status: 'éteint' }
  ];
  
  onAllumer() {
    console.log('allumer tout');
  }
  
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
}

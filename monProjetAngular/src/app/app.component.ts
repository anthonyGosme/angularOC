import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number = 0;
  counterSubscription: Subscription = new Subscription;
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('error');
      },
      () => {
        console.log('Observable complété');
      }
    );
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe() ; // DETRUIT LA SPUSCRIPTION pour les bug infini
  }

}

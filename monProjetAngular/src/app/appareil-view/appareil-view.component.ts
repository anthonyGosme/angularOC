import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../service/appareilService'; 
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {


  appareilSubscrition: Subscription = new Subscription;

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

  onAllumer() {
    this.appareilService.switchOnAll() ;
  }
  onEteindre() {
    this.appareilService.switchOffAll() ;
  }
  appareils: any[]=[];
  constructor(private appareilService : AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit(){
    this.appareilSubscrition = this.appareilService.appareilSubject.subscribe(
      (appareils : any[])=>{
        this.appareils = appareils ;
      }
    ) ;
    this.appareilService.emitAppareilSubject() ;
  }
}

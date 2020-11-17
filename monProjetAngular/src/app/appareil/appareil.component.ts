import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareilName : string ='machine à laver'; 
  appareilStatus : string ='éteint'; 
  getStatus() :string 
  {
    return this.appareilStatus ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string ="" ; 
  @Input() appareilStatus : string =""; 

  getColor(): string{
    if (this.appareilStatus ==='éteint') return 'red' ;
    return 'green' ;
  }
  getStatus() :string 
  {
    return this.appareilStatus ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

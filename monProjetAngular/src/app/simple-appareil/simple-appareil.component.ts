import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../service/appareilService';

@Component({
  selector: 'app-simple-appareil',
  templateUrl: './simple-appareil.component.html',
  styleUrls: ['./simple-appareil.component.scss']
})
export class SimpleAppareilComponent implements OnInit {

  name : string = 'Appareil';
  status :string = 'Status'
  constructor(private appareilService : AppareilService, private route :ActivatedRoute) {


   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'] ;
    this.name = this.appareilService.getAppareilFromId(+id).name ; // + cast en number
    this.status = this.appareilService.getAppareilFromId(+id).status ;
  }

}

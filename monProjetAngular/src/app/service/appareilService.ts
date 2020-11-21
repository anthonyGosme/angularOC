import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class AppareilService {

  constructor(private httpClient: HttpClient) {}
  appareilSubject = new Subject<any[]>();
  emitAppareilSubject() {
    // emet list appareils
    this.appareilSubject.next(this.appareils.slice());
  }
  private appareils = [
    { id: 0, name: 'machine à laver', status: 'allumé' },
    { id: 1, name: 'télévision', status: 'allumé' },
    { id: 2, name: 'ordinateur', status: 'éteint' }
  ];
  getAppareilFromId(id: number) {
    return this.appareils[id];

    // const appareil = this.appareils.find((appareilObject) =>{
    //   return appareilObject.id ===id;}) ;
    // return appareil ;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  loadAppareilFromDb()
  {
    this.httpClient
    .get<any[]>(
      'https://angularoc-d63c2.firebaseio.com/appareils.json'    )
    .subscribe(
      (response) => {
       this.appareils = response ;
       this.emitAppareilSubject() ;
      },
      (error) => {
        console.log('erreur chargement: ' + error);
      }
    );

  }
  saveAppareilToDb() {
    this.httpClient
      .put(
        'https://angularoc-d63c2.firebaseio.com/appareils.json',
        this.appareils
      )
      .subscribe(
        () => {
          console.log('enregistrement terminé');
        },
        error => {
          console.log('erreur : ' + error);
        }
      );
  }
  switchOnAll() {
    for (let appareil of this.appareils) appareil.status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let appareil of this.appareils) appareil.status = 'éteint';
    this.emitAppareilSubject();
  }
  switchOn(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOff(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }
}

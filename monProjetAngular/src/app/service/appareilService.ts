import { Subject } from 'rxjs';

export class AppareilService{
    appareilSubject = new Subject<any[]>() ;
    emitAppareilSubject(){ // emet list appareils
      this.appareilSubject.next(this.appareils.slice()) ;
    }
    private appareils = [
        { id:0,name: 'machine à laver', status: 'allumé'},
        { id:1,name: 'télévision', status: 'allumé' },
        { id:2,name: 'ordinateur', status: 'éteint' }
      ];
      getAppareilFromId(id : number)
      {
        return this.appareils[id] ;
     
       // const appareil = this.appareils.find((appareilObject) =>{
       //   return appareilObject.id ===id;}) ;
       // return appareil ;
      }
      switchOnAll(){
        for (let appareil of this.appareils)
          appareil.status = "allumé" ;
          this.emitAppareilSubject() ;
      }
      switchOffAll(){
        for (let appareil of this.appareils)
          appareil.status = "éteint" ;
          this.emitAppareilSubject() ;
      }
      switchOn(index:number){
          this.appareils[index].status = "allumé" ;
          this.emitAppareilSubject() ;
      }
      switchOff(index:number){
        this.appareils[index].status = "éteint" ;
        this.emitAppareilSubject() ;
    }
}
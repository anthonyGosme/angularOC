export class AppareilService{
    appareils = [
        { id:0,name: 'machine à laver', status: 'allumé' },
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
      }
      switchOffAll(){
        for (let appareil of this.appareils)
          appareil.status = "éteint" ;
      }
      switchOn(index:number){
          this.appareils[index].status = "allumé" ;
      }
      switchOff(index:number){
        this.appareils[index].status = "éteint" ;
    }
}
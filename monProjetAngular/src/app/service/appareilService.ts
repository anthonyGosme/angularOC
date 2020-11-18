export class AppareilService{
    appareils = [
        { name: 'machine à laver', status: 'allumé' },
        { name: 'télévision', status: 'allumé' },
        { name: 'ordinateur', status: 'éteint' }
      ];
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
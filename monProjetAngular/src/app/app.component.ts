import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth : boolean  = false ;
  appareil1 = "machine à laver"
  appareil2 = "télévision"
  appareil3 = "oridinateur"
  onAllumer(){
    console.log("allumer tout") ;
  }

  constructor(){
    setTimeout(()=>{
      this.isAuth = true;
    }, 4000)
  }
}

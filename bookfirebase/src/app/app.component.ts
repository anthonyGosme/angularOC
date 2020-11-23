import { Component } from '@angular/core';

import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bookfirebase';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBk9Fu2RGYhjpYb_1qzNykzIJpZojVoU5s",
      authDomain: "book-572ac.firebaseapp.com",
      databaseURL: "https://book-572ac.firebaseio.com",
      projectId: "book-572ac",
      storageBucket: "book-572ac.appspot.com",
      messagingSenderId: "1090328554077",
      appId: "1:1090328554077:web:34ab2a42e71149d0643bb4",
      measurementId: "G-VJXK356E7R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
  }
}

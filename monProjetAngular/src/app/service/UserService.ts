import { Subject } from 'rxjs';
import { User } from '../models/User';

export class UserService {
  private users: User[] = [
    { firstName :'toto',
     lastName :'cardinal',
     email: 'toto@yoyo.com',
     drinkPreference: 'Coca',
     hobbies: ["vélo","train train"]
    }
  ] ;
    userSubject = new Subject<User[]>() ;
    emitUser(){
        this.userSubject.next(this.users.slice()) ;
    }
    addUser(user : User){
        this.users.push(user) ;
        this.emitUser();
    }
}

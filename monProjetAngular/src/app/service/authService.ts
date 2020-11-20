export class AuthService {
  isAuth: boolean = false;
  SignIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 1000);
    });
  }

  SignOut() {
    this.isAuth = false;
    }
}
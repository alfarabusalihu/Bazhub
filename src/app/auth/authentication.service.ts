import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private users: User[] = [
    { id: '1', email: 'alfarabu@gmail.com', username: 'alfar', password: 'alfaralfa', image: 'https://placehold.co/400x400', type:'user' },
    { id: '2', email: 'alfarsdfg@gmail.com', username: 'abu', password: 'abuuuuuu', image: 'https://placehold.co/400x400' , type:'user'  },
    { id: '3', email: 'raflasalfa@gmail.com', username: 'abu', password: 'wertyuio', image: 'https://placehold.co/400x400' , type:'user'   },
    { id: '4', email: 'admin@gmail.com', username: 'admin', password: 'admin123', image: 'https://placehold.co/400x400' , type:'admin' },
    { id: '5', email: 'raflaswert@gmail.com', username: 'abu222', password: 'wertyuio', image: 'https://placehold.co/400x400' , type:'user'   },
    { id: '6', email: 'rafl333alfa@gmail.com', username: 'ab22u', password: 'wertyuio', image: 'https://placehold.co/400x400' , type:'user'   },
    
  ]
  authUser: User

  constructor() {
    // this.getUsersFromStore()
  }

  getUsers(): User[] { return this.users }

  getUserById(id: string) { this.users.find((user) => { return user.id == id }) }

  getUserByEmail(userEmail: string) {
    // let fowler= this.users.find(user => { user.email == userEmail })
    // console.log(fowler)
    return this.users.find(user => user.email == userEmail || user.email=='admin@gmail.com')
  }

  login(payload: { email: string, password: string }) {
    const { email, password } = payload;

    const user = this.getUserByEmail(email);

    if(user && user.password===password && user.type=='user'){
      this.setAuthenticatedUser(user);
      return true

    }else if(user && user.type=='admin' && user.password=='admin123'){
      this.setAuthenticatedAdmin(user);
      return true
    }
    else return false
  }

  setAuthenticatedUser(user: User) { localStorage.setItem('authenticatedUser', JSON.stringify(user)) }

  setAuthenticatedAdmin(user: User) { localStorage.setItem('authenticatedAdmin', JSON.stringify(user)) }


  getAuthenticatedUser() {
    this.authUser = JSON.parse(localStorage.getItem('authenticatedUser'))
    return this.authUser
  }

  getAuthenticatedAdmin() {
     return JSON.parse(localStorage.getItem('authenticatedAdmin'))
  }

  getUsersFromStore() { this.users = JSON.parse(localStorage.getItem('users')); }

  saveToStore() { localStorage.setItem('users', JSON.stringify(this.users)); }

  registerUser(user: User) {
    let id = new Date().getTime()
    user.id = id.toString()
    this.users.push(user)
    console.log(user);
    this.saveToStore();
  }

  logout() {  localStorage.removeItem('autenticatedUser'); }
}

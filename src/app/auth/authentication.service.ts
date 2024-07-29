import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private users: User[] = [
    { id: '1', email: 'alfarabu@gmail.com', username: 'alfar', password: 'alfaralfa', image: 'https://placehold.co/400x400' },
    { id: '2', email: 'alfarsdfg@gmail.com', username: 'abu', password: 'abuuuuuu', image: 'https://placehold.co/400x400' },
    { id: '3', email: 'raflasalfa@gmail.com', username: 'abu', password: 'wertyuio', image: 'https://placehold.co/400x400' },
    { id: '4', email: 'admin@gmail.com', username: 'admin', password: 'admin123', image: 'https://placehold.co/400x400' },
    
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
    return this.users.find(user => user.email == userEmail)
  }

  login(payload: { email: string, password: string }) {
    const { email, password } = payload;

    const user = this.getUserByEmail(email);

    if(user && user.password===password ){
      this.setAuthenticatedUser(user);
      return true
    }
    else return false
  }

  setAuthenticatedUser(user: User) { localStorage.setItem('autenticatedUser', JSON.stringify(user)) }

  getAuthenticatedUser() {
    this.authUser = JSON.parse(localStorage.getItem('autenticatedUser'))
    return this.authUser
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

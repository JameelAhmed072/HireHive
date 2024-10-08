import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loggedIn: boolean = false;
  currentlyLoggedRole: string;
  loginStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  loggedRole: EventEmitter<string> = new EventEmitter<string>();

  constructor(
      private router: Router
  ) { }

        // ===============>          using this one when backend was not connected with frontend
  // users: User[] = [
  //   new User('Jameel Ahmed', 'jameel@gmail.com', 'jameel123','Employee'),
  //   new User('Raheel Afzal', 'raheel@gmail.com', 'raheel123','Employer'),
  //   new User('Huzaifa Aslam', 'huzaifa@gmail.com', 'huzaifa123','Investor'),
  //   new User('Majboori', 'majboori@gmail.com', 'majboori123','BusinessOwner')
  // ];


  // checkCredentials(email: string, password: string){
  //   const user = this.user.find(user => user.email === email && user.password === password);
  //   this.currentlyLoggedRole = user.role;
  //   if (user) {
  //     if (this.currentlyLoggedRole === 'Employee') {
  //       // this.currentlyLoggedRole = user.role;
  //       this.router.navigateByUrl('employeeHome');
  //     }else if (this.currentlyLoggedRole === 'Employer') {
  //       this.router.navigateByUrl('employerHome');
  //     }
  //     else if (this.currentlyLoggedRole === 'Investor') {
  //       this.router.navigateByUrl('investorHome');
  //     }
  //     else if (this.currentlyLoggedRole === 'BusinessOwner') {
  //       this.router.navigateByUrl('business-owner-Home');
  //     }
  //     this.loggedIn = true;
  //     this.loginStateChanged.emit(this.loggedIn); // Emit the change
  //     this.loggedRole.emit(this.currentlyLoggedRole); // Emit the change

  //     return true;
  //   } else {
  //     console.log('Invalid Credentials');
  //     this.loggedIn = false;
  //     this.currentlyLoggedRole = 'Visitor';
  //     this.loginStateChanged.emit(this.loggedIn); // Emit the change
  //     this.loggedRole.emit('Visitor'); // Emit the change
  //     return false;
  //   }

  // }


  // logout() {
  //   this.loggedIn = false;
  //   this.currentlyLoggedRole = 'Visitor';
  //   this.loginStateChanged.emit(this.loggedIn); // Emit the change
  //   this.loggedRole.emit(this.currentlyLoggedRole); // Emit the change
  //   this.router.navigateByUrl('home');
  // }



}

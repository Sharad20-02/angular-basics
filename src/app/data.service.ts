import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  info1: string[] = ['John Mathew', 'E354', 'jm@abc.net'];
  info2: string[] = ['Rob Wilson', 'E673', 'rw@abc.net'];
  info3: string[] = ['Rose Adams', 'E865', 'ra@abc.net'];

  private email = new BehaviorSubject<string>('');
  private password = new BehaviorSubject<string>('');

  currentemail = this.email.asObservable();
  currentpassword = this.password.asObservable();

  changeemail = (email2: string)=>{
    console.log("change email called", email2);
    this.email.next(email2);
  }
  changepassword = (password2: string)=>{
    console.log("change password called", password2);
    this.password.next(password2);
  }

  getinfo1(): string[]{
    return this.info1;
  }
  getinfo2(): string[]{
    return this.info2;
  }
  getinfo3 = ()=>{
    return this.info3;
  }

  addInfo = (location: any)=>{
    this.info1.push(location);
    this.info2.push(location);
    this.info3.push(location);
  }
  constructor() {}
}

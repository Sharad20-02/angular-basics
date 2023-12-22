import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  // providers: [DataService]
})
export class EInfoComponent implements OnInit {

  constructor(private dservice: DataService){};

  count: number = 0;
  email: string = '';
  password: string = '';

  Add = ()=>{
    this.count++;
  }
  Subtract = ()=>{
    this.count--;
  }

  location: string ='';

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromService1 = () => {
    this.infoReceived1 = this.dservice.getinfo1();
  };
  getInfoFromService2 = () => {
    this.infoReceived2 = this.dservice.getinfo2();
  };
  getInfoFromService3 = () => {
    this.infoReceived3 = this.dservice.getinfo3();
  };

  updateInfo = ()=>{
    this.dservice.addInfo(this.location);
  }

  ngOnInit() {
    this.dservice.currentemail.subscribe((email)=>{
      console.log("inside noOnInit: ",email);
      this.email = email;
    });
    this.dservice.currentpassword.subscribe((password)=>{
      this.password = password;
    })
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {

  constructor(private router: Router, private dservice :DataService){}
  

  title = "forms-demo-compoenet-title"

  email: string = "";
  password: string = "";
  count: number = 0;

  Submit = ()=>{
    console.log("Form submission");
    console.log(this.email);
    console.log(this.password);
    
    this.dservice.changeemail(this.email);
    this.dservice.changepassword(this.password);
    this.router.navigate(['eInfo']);
  }

  Add = ()=>{
    this.count++;
  }
}

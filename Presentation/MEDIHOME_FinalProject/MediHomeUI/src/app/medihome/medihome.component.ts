import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cmptlk1Service } from '../cmptlk1.service';
import { Specloc } from '../specloc';
import { OutClass } from '../out-class';
import { MediHomeService } from '../medi-home.service';


@Component({
  selector: 'app-medihome',
  templateUrl: './medihome.component.html',
  styleUrls: ['./medihome.component.css']
})
export class MedihomeComponent implements OnInit 
{
  title = 'MediHome';
  sp:Specloc;
  msg:any;

  constructor(private ro:Router, private servc:MediHomeService, private com1: Cmptlk1Service)
  {
    this.sp = new Specloc();
    this.sp.location="";
  }

  gotoconsultation()
  {
    this.servc.sendLocation(this.sp).subscribe   //Service Call
    (
      (data:OutClass)=>
      {
        if(data.status == 1)
        {
          this.sp.location = data.content;
          this.com1.consult(this.sp);              //Data send to Consultation Comp via CompTalk1 Service
          this.ro.navigate(['/consultation']);    
        }
        else
        {
          this.msg = "Selected location is coming soon, Thankyou.!!";
        }
      },
      (error)=>
      {
        this.msg = "Something wrong";
      }
    );
  }

  ngOnInit(): void 
  {
  }
}
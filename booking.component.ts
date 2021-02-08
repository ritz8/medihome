import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cmptlk1Service } from '../cmptlk1.service';
import { MediHomeService } from '../medi-home.service';
import { OutClass } from '../out-class';
import { CmptlkService } from '../cmptlk.service';
import { Inputdoctor } from '../inputdoctor';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit 
{
  msg:any;
  idoc:Inputdoctor;

  constructor(private ro:Router, private com1:Cmptlk1Service,private com:CmptlkService, private servc: MediHomeService) 
  { 
    this.idoc=new Inputdoctor();
    this.idoc.appointDate=new Date();
  }

  payment()
  {
    this.servc.bookng(this.idoc).subscribe
      (
        (data:OutClass)=>
        {
          if(data.status == 1)
          {
            this.com1.passDateToPayment(this.idoc); //send Doctor detail with appointDate to Payment via CompTalk1 Service
            this.ro.navigate(['/payment']);
          }
          else
          {
            this.msg = "Please select Date interval from tomorrow upto 7 days";
          }
        },
        (error)=>
        {
          this.msg = "Something wrong";
      }
    )
  }

  ngOnInit(): void 
  {
    this.com.op.subscribe((dt:any)=>  //receive doctor details from Consult-Doctor via CompTalkService
    {
      this.idoc.Doc_id=dt.did;
      this.idoc.Doc_name=dt.dn;
      this.idoc.Experience=dt.exp;
      this.idoc.Speciality=dt.spec;
      this.idoc.Location=dt.loc;
      this.idoc.Contact=dt.cnt;
    }); 
  }

}

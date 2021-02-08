import { Component, OnInit } from '@angular/core';
import { Inputdoctor } from '../inputdoctor';
import { Router } from '@angular/router';
import { CmptlkService } from '../cmptlk.service'; 
import { DatePipe } from '@angular/common';
import { Cmptlk1Service } from '../cmptlk1.service';
import { OutClass } from '../out-class';
import { PatientModel } from '../patient-model';
import { MediHomeService } from '../medi-home.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit  
{
  title:string='Payment For Doctor';
  idoc:Inputdoctor;
  obj1:PatientModel;

  constructor(private servc:MediHomeService, private ro:Router, private com:CmptlkService, private com1:Cmptlk1Service) 
  {
    this.obj1=new PatientModel();
    this.idoc=new Inputdoctor();
    this.obj1.F_Name="";
    this.obj1.L_Name="";
    this.obj1.Phone="";
    this.obj1.Email="";
    this.obj1.docid="";
    this.obj1.Appointment_Date=new Date();
  }

  confirmPayment()
  {
    this.obj1.Appointment_Date=this.idoc.appointDate;
    this.obj1.docid=this.idoc.Doc_id;
    this.servc.payment(this.obj1).subscribe
    (
      (data:OutClass)=>
      {        
        if(data.status ==1)
        {
          this.title = "Patient info saved Continue to next page!!!";
        }     
      }
      ,(error)=>
      {
        this.title ="failed some issue in contacting with Service";
      }
    );
    this.com1.passDocToReceipt(this.idoc);         //send to Pay-Receipt Comp via Component-Talk1 Service
    this.ro.navigate(['/receipt']);
  }
 
  ngOnInit(): void 
  {
    this.com1.op1.subscribe((dt:Inputdoctor)=>    //received from booking
    {
      this.idoc.Doc_id = dt.Doc_id;
      this.idoc.Doc_name=dt.Doc_name;
      this.idoc.Experience=dt.Experience;
      this.idoc.Speciality=dt.Speciality;
      this.idoc.Location=dt.Location;
      this.idoc.Contact=dt.Contact;
      this.idoc.appointDate=dt.appointDate;
    });    
  }
}

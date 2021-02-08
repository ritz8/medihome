import { Component, OnInit, Output } from '@angular/core';
import {  MediHomeService} from '../medi-home.service';
import { Inputdoctor } from '../inputdoctor';
import { Specloc } from '../specloc';
import { Router } from '@angular/router';
import { CmptlkService } from '../cmptlk.service'; 
import { OutClass } from '../out-class';

@Component({
  selector: 'app-consult-doctor',
  templateUrl: './consult-doctor.component.html',
  styleUrls: ['./consult-doctor.component.css']
})
export class ConsultDoctorComponent implements OnInit 
{
  title:string='Doctor List';
  iobj:Inputdoctor;
  msg:any;
  arr2:any=[];
  noofrow:any;

  constructor(private servc:MediHomeService, private ro:Router, private com:CmptlkService) 
  {
    this.iobj = new Inputdoctor();

    this.com.op.subscribe((dt:Specloc)=>            //Component Talk Data received here
    {
      if(dt.num == 1)                          //data coming & matched from Symptoms Comp
      {
        this.iobj.Speciality= dt.speciality;
        this.iobj.Location=dt.location;
      }
      else  //data coming & matched from Consultation Comp
      {
        this.iobj.Speciality=dt.speciality;
        this.iobj.Location=dt.location;
      }
    });
    
    this.servc.doctorPostCall(this.iobj).subscribe
    (
      (data:OutClass)=>
      {
        this.arr2 = data.content;
        this.noofrow=data.noofrow;
        if(data.status==1)
        {
          this.msg="Success";
        }
      },
      (err)=>
      { 
        this.msg ="Display failed";
      }
    );
  }

  docsend(docid:any)           //onClick Book Appointment
  {
    var reslt=[];
    for(var j = 0; j < this.arr2.length; j++)
    {
      if(docid == this.arr2[j].doc_id)
      {
        reslt["did"] = this.arr2[j].doc_id;
        reslt["dn"] = this.arr2[j].doc_name;
        reslt["exp"] = this.arr2[j].experience;
        reslt["spec"] = this.arr2[j].speciality;
        reslt["loc"] = this.arr2[j].location;
        reslt["cnt"] = this.arr2[j].contact;
      }
    }
    this.com.sendDoc(reslt);             //send to Booking via CompTalk Service
  }

  ngOnInit(): void      
  { 
  }
}


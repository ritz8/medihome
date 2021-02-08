import { Component, OnInit } from '@angular/core';
import { MediHomeService } from '../medi-home.service';
import { Router } from '@angular/router';
import { CmptlkService } from '../cmptlk.service';
import { Specloc } from '../specloc';
import { Cmptlk1Service } from '../cmptlk1.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit 
{  
  title = 'Consultation';
  msg:string;
  sp:Specloc;
  
  constructor(private servc:MediHomeService, private ro:Router, private com: CmptlkService, private com1: Cmptlk1Service)
  {
    this.sp = new Specloc();
    this.sp.speciality="";
    this.sp.sym=[];
  }  
  
  symptoms = 
  [
    {name:'Diarrhea', checked:false},         //Immunologist
    {name:'Dizziness', checked:false},        //Cardiologist
    {name:'Headache', checked:false},         //Physician
    {name:'Rash', checked:false},             //Dermatologist
    {name:'Menopause', checked:false},        //Gynecologist
    {name:'Nausea', checked:false},         //Immunologist
    {name:'Stiffness', checked:false},        //Surgeon
    {name:'Cough', checked:false},            //Oncologist
    {name:'Fatigue', checked:false},          //Oncologist
    {name:'Paralysis', checked:false},          //Neurologist
    {name:'Swelling', checked:false},           //OrthoPedics
    {name:'Migraines', checked:false},          //Neurologist
    {name:'Chest pain', checked:false},         //Cardiologist
    {name:'Itching', checked:false},            //Dermatologist
    {name:'Vomiting', checked:false},           //pediatrician
    {name:'Tiredness', checked:false},           //Physician
    {name:'Numbness', checked:false},            //OrthoPedics
    {name:'Depression', checked:false},         //Psyciatrics
    {name:'Fever', checked:false},
    {name:'Internal bleeding', checked:false},    //Radiology
    {name:'Anxiety', checked:false}             //Psyciatrics
  ]
  
  gotoSymptom()
  {
    for(let i = 0; i<this.symptoms.length; i++)
    {
      if(this.symptoms[i].checked == true)
      {
        this.sp.sym.push(this.symptoms[i].name);
      }
    }
    this.com.sendSymptoms(this.sp);           //send data to Symptoms via CompTalk Service
    this.ro.navigate(['/symptoms','']);
  }
  
  gotoConsultDoctor()
  {
    this.sp.num=2;
    this.com.sendSpeciality(this.sp);       //send data to Consult-Doctor via CompTalk Service
    this.ro.navigate(['/ConsultDoctor']);
  }

  ngOnInit():void
  {
    this.com1.op1.subscribe((dt:Specloc)=>  //receive location from MediHome via CompTalk1 Service
    {
      this.sp.location=dt.location[0].name;
    });
  } 
}

import { Component, OnInit } from '@angular/core';
import {MediHomeService} from '../medi-home.service';
import {OutClass} from '../out-class';
import {Router} from '@angular/router';
import { CmptlkService } from '../cmptlk.service';
import { Specloc } from '../specloc';
import { Sympcls } from '../sympcls';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit 
{
  smp:Sympcls;
  sp:Specloc;
  smpr:any;

  constructor(private servc:MediHomeService, private ro: Router, private com:CmptlkService) 
  {
    this.sp= new Specloc();
    this.smp = new Sympcls();
    this.smp.symarr=[];
  }

  symptom()
  {
    this.sp.num=1;
    this.sp.location=this.smp.location;
    this.servc.valdt(this.smp).subscribe
    (
      (data:OutClass)=>
      {
        if(data.status==1)
        {
          this.smpr=data.content;
          this.sp.speciality = data.content[0].speciality;
          this.com.speccmp2(this.sp);
        }
      }
    )
  } 

  public onCardClick(evt: MouseEvent)
  {
    this.ro.navigate(["/ConsultDoctor"]);
  } 

  ngOnInit(): void 
  {
    this.com.op.subscribe((dt:any)=>
    {
      this.smp.location=dt.location;
      for(let i=0; i < dt.sym.length; i++)
      {
        this.smp.symarr.push(dt.sym[i]);
      }
    });
  }
}
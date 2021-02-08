import { Component, OnInit } from '@angular/core';
import { Cmptlk1Service } from '../cmptlk1.service';
import { Inputdoctor } from '../inputdoctor';

@Component({
  selector: 'app-pay-receipt',
  templateUrl: './pay-receipt.component.html',
  styleUrls: ['./pay-receipt.component.css']
})
export class PayReceiptComponent implements OnInit 
{
  xy:any ={dnm:"", expr:0, specl:"", loc:"", cont:"",appointdte:""};
  inpd: Inputdoctor;

  constructor(private com: Cmptlk1Service) 
  { 
    this.inpd=new Inputdoctor();
    this.com.op1.subscribe((dt:Inputdoctor)=>  // receive doctor details from Payment via CompTalkService
    {     
      this.xy.dnm=dt.Doc_name;
      this.xy.expr=dt.Experience;
      this.xy.specl=dt.Speciality;
      this.xy.loc=dt.Location;
      this.xy.cont=dt.Contact;
      this.xy.appointdte=dt.appointDate;
    });
  }

  ngOnInit(): void 
  {
  }
}

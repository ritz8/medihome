import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs';
import { Specloc } from './specloc';
import { OutClass } from './out-class';
import { Inputdoctor } from './inputdoctor';
import { PatientModel } from './patient-model';
import { Sympcls } from './sympcls';

@Injectable({
  providedIn: 'root'
})
export class MediHomeService 
{
  constructor(private hc:HttpClient){ }


 sendLocation(ob:Specloc):Observable<OutClass>      //1. Service call via MediHome-Comp
 {
   let url = `http://localhost:8080/location?loc=${ob.location}`;
   return this.hc.get<OutClass>(url);
 }

 doctorPostCall(ob:Inputdoctor):Observable<OutClass>      //3. Service call via Consult-Doctor Comp
 {
   let url = `http://localhost:8080/doctor?loc=${ob.Location}&spec=${ob.Speciality}`;
   return this.hc.get<OutClass>(url);
 }

  bookng(ob:Inputdoctor):Observable<OutClass>         //4. Service call via Booking-Comp
  {
    let url = "http://localhost:90/booking";
    return this.hc.post<OutClass>(url,ob);
  }
 
  payment(ob:PatientModel):Observable<OutClass>      //5. Service call via Payment-Comp
  {
    let url:string ="http://localhost:90/insertpatient";
    return this.hc.post<OutClass>(url,ob);
  }  


  valdt(ob:Sympcls):Observable<OutClass>                //2. Service call via Symptoms-Comp
  {
    let url:any = "http://localhost:90/symptom";
    return this.hc.post<OutClass>(url,ob);
  }
}



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmptlkService 
{
  private es = new BehaviorSubject<any>("Sending argument");
  op = this.es.asObservable();

  sendSpeciality(z:any)     //3. Consultation --> Consult-Doctor
  {
    this.es.next(z);
  }

  sendSymptoms(z:any)         //2. Consultation --> Symptoms
  {
    this.es.next(z);
  }

  sendDoc(z:any)               //5. Consult-Doctor --> Booking
  {
    this.es.next(z);
  }

  speccmp2(z:any)               //4. Symptoms --> Consult-Doctor
  {
    this.es.next(z);
  }

  constructor() { }
}
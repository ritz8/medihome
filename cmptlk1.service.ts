import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cmptlk1Service {

  private es = new BehaviorSubject<any>("Sending argument");
  op1 = this.es.asObservable();
 
  passDateToPayment(dte:any)              //6. Booking --> Payment
  {
    this.es.next(dte);
  }

  passDocToReceipt(z:any)                 //7.Payment --> PayReceipt
  {
    this.es.next(z);
  }

  consult(z:any)                    //1. MediHome --> Consultation 
  {
    this.es.next(z);
  }

  constructor() {}
}

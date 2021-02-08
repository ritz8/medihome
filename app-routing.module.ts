import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsComponent} from './symptoms/symptoms.component';
import {ConsultDoctorComponent } from './consult-doctor/consult-doctor.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {MedihomeComponent} from './medihome/medihome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PaymentComponent} from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { PayReceiptComponent } from './pay-receipt/pay-receipt.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/Medihome', 
    pathMatch: 'full'
  },
  {
    path: '',
    component: SymptomsComponent
  },
  {
    path: 'Medihome', 
    component: MedihomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'consultation', 
    component: ConsultationComponent
  },
  {
    path:'symptoms/:sp',
    component:SymptomsComponent
  },
  {
    path: 'symptoms', 
    component: SymptomsComponent
  },
  {
    path: 'ConsultDoctor', 
    component: ConsultDoctorComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'payment', 
    component: PaymentComponent
  },
  {
    path: 'receipt',
    component: PayReceiptComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

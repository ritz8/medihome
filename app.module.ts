import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MedihomeComponent } from './medihome/medihome.component';
import { ConsultDoctorComponent } from './consult-doctor/consult-doctor.component';
import { PaymentComponent } from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { PayReceiptComponent } from './pay-receipt/pay-receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomsComponent,
    MedihomeComponent,
    ConsultDoctorComponent,
    PaymentComponent,
    PageNotFoundComponent,
    ConsultationComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    PayReceiptComponent,
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

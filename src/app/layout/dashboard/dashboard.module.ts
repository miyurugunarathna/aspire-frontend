import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './../../components/badge/badge.component';
import { FreeCardComponent } from 'src/app/components/free-card/free-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachercourseviewComponent } from 'src/app/components/teachercourseview/teachercourseview.component';
import { SubjectComponent } from 'src/app/components/subject/subject.component';
import { ClassComponent } from 'src/app/components/class/class.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ViewPaymentComponent } from 'src/app/components/payment/view-payment/view-payment.component';
import { AddStudentComponent } from 'src/app/components/registration/add-student/add-student.component';
import { TpackagesComponent } from 'src/app/components/packages/tpackages/tpackages.component';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { RegisterComponent } from 'src/app/components/register/register/register.component';
import { LoginComponent } from 'src/app/components/login/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SubjectComponent,
    TeachercourseviewComponent,
    ClassComponent,
    CoursesComponent
    TpackagesComponent,
    BadgeComponent,
    FreeCardComponent,
    FeesComponent,
    PaymentComponent,
    ViewPaymentComponent,
    AddStudentComponent,
    FeesComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,

  ]
})
export class DashboardModule { }

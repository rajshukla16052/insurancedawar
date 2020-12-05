import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SecureContactFormComponent } from './secure-contact-form/secure-contact-form.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { InsuranceCarriersComponent } from './insurance-carriers/insurance-carriers.component';
import { HomeInsuranceComponent } from './home-insurance/home-insurance.component';
import { LifInsuranceComponent } from './lif-insurance/lif-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { BusinessInsuranceComponent } from './business-insurance/business-insurance.component';
import { GroupBenefitsComponent } from './group-benefits/group-benefits.component';
import { AutoInsuranceComponent } from './auto-insurance/auto-insurance.component';
import { HomeownerInsuranceComponent } from './homeowner-insurance/homeowner-insurance.component';
import { RentersComponent } from './renters/renters.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { BoatMarinInsuranceComponent } from './boat-marin-insurance/boat-marin-insurance.component';
import { BusinessownerInsuranceComponent } from './businessowner-insurance/businessowner-insurance.component';
import { CommercialAutoInsuranceComponent } from './commercial-auto-insurance/commercial-auto-insurance.component';
import { CommercialPropertyInsuranceComponent } from './commercial-property-insurance/commercial-property-insurance.component';
import { GeneralLiabilityInsuranceComponent } from './general-liability-insurance/general-liability-insurance.component';
import { WorkersCompensationInsuranceComponent } from './workers-compensation-insurance/workers-compensation-insurance.component';
import { FixedAnnuitiesComponent } from './fixed-annuities/fixed-annuities.component';
import { FinalExpenseInsuranceComponent } from './final-expense-insurance/final-expense-insurance.component';
import { IndividualLifeInsuranceComponent } from './individual-life-insurance/individual-life-insurance.component';
import { MortgageProtectionInsuranceComponent } from './mortgage-protection-insurance/mortgage-protection-insurance.component';
import { IndividualDisabilityInsuranceComponent } from './individual-disability-insurance/individual-disability-insurance.component';
import { IndividualDentalInsuranceComponent } from './individual-dental-insurance/individual-dental-insurance.component';
import { FamilyHealthInsuranceComponent } from './family-health-insurance/family-health-insurance.component';
import { IndividualLongCareInsuranceComponent } from './individual-long-care-insurance/individual-long-care-insurance.component';
import { IndividualVisionInsuranceComponent } from './individual-vision-insurance/individual-vision-insurance.component';
import { GroupComponent } from './group/group.component';
import { GroupDisabilityInsuranceComponent } from './group-disability-insurance/group-disability-insurance.component';
import { GroupDentalInsuranceComponent } from './group-dental-insurance/group-dental-insurance.component';
import { GroupLifeInsuranceComponent } from './group-life-insurance/group-life-insurance.component';
import { GroupLongTermInsuranceComponent } from './group-long-term-insurance/group-long-term-insurance.component';
import { GroupHealthInsuranceComponent } from './group-health-insurance/group-health-insurance.component';
import { TruckingInsuranceComponent } from './trucking-insurance/trucking-insurance.component';
import { CommonFormsComponent } from './common-forms/common-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SecureContactFormComponent,
    ReferFriendComponent,
    InsuranceCarriersComponent,
    HomeInsuranceComponent,
    LifInsuranceComponent,
    HealthInsuranceComponent,
    BusinessInsuranceComponent,
    GroupBenefitsComponent,
    AutoInsuranceComponent,
    HomeownerInsuranceComponent,
    RentersComponent,
    MotorcycleComponent,
    BoatMarinInsuranceComponent,
    BusinessownerInsuranceComponent,
    CommercialAutoInsuranceComponent,
    CommercialPropertyInsuranceComponent,
    GeneralLiabilityInsuranceComponent,
    WorkersCompensationInsuranceComponent,
    FixedAnnuitiesComponent,
    FinalExpenseInsuranceComponent,
    IndividualLifeInsuranceComponent,
    MortgageProtectionInsuranceComponent,
    IndividualDisabilityInsuranceComponent,
    IndividualDentalInsuranceComponent,
    FamilyHealthInsuranceComponent,
    IndividualLongCareInsuranceComponent,
    IndividualVisionInsuranceComponent,
    GroupComponent,
    GroupDisabilityInsuranceComponent,
    GroupDentalInsuranceComponent,
    GroupLifeInsuranceComponent,
    GroupLongTermInsuranceComponent,
    GroupHealthInsuranceComponent,
    TruckingInsuranceComponent,
    CommonFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

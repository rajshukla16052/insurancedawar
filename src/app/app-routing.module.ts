import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SecureContactFormComponent } from './secure-contact-form/secure-contact-form.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { InsuranceCarriersComponent } from './insurance-carriers/insurance-carriers.component';
import { HomeInsuranceComponent } from './home-insurance/home-insurance.component';
import { LifInsuranceComponent } from './lif-insurance/lif-insurance.component';
import { BusinessInsuranceComponent } from './business-insurance/business-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { GroupBenefitsComponent } from './group-benefits/group-benefits.component';
import { AutoInsuranceComponent } from './auto-insurance/auto-insurance.component';
import { RentersComponent } from './renters/renters.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { BoatMarinInsuranceComponent } from './boat-marin-insurance/boat-marin-insurance.component';
import { HomeownerInsuranceComponent } from './homeowner-insurance/homeowner-insurance.component';
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
import { GroupDisabilityInsuranceComponent } from './group-disability-insurance/group-disability-insurance.component';
import { GroupDentalInsuranceComponent } from './group-dental-insurance/group-dental-insurance.component';
import { GroupHealthInsuranceComponent } from './group-health-insurance/group-health-insurance.component';
import { GroupLifeInsuranceComponent } from './group-life-insurance/group-life-insurance.component';
import { GroupLongTermInsuranceComponent } from './group-long-term-insurance/group-long-term-insurance.component';
import { TruckingInsuranceComponent } from './trucking-insurance/trucking-insurance.component';
import { CommonFormsComponent } from './common-forms/common-forms.component';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'contact',component:ContactComponent},
 {path:'secure_contact_form',component:SecureContactFormComponent},
 {path:'refer_friend',component:ReferFriendComponent},
 {path:'insurance_carriers',component:InsuranceCarriersComponent},
 {path:'home_insurance', component:HomeInsuranceComponent},
 {path:'life_insurance',component:LifInsuranceComponent},
 {path:'business_insurance',component:BusinessInsuranceComponent},
 {path:'health_insurance',component:HealthInsuranceComponent},
 {path:'group_benefits',component:GroupBenefitsComponent},
 {path:'auto_insurance',component:AutoInsuranceComponent},
 {path:'homeowner_insurance',component:HomeownerInsuranceComponent},
 {path:'renters_insurance',component:RentersComponent},
 {path:'motorcycle_insurance',component:MotorcycleComponent},
 {path:'boat_marine',component:BoatMarinInsuranceComponent},
 {path:'businessowner_package',component:BusinessownerInsuranceComponent},
 {path:'commercial_auto', component:CommercialAutoInsuranceComponent},
 {path:'commercial_property',component:CommercialPropertyInsuranceComponent},
 {path:'general_liability',component:GeneralLiabilityInsuranceComponent},
 {path:'workers_compensation',component:WorkersCompensationInsuranceComponent},
 {path:'fixed_annuities',component:FixedAnnuitiesComponent},
 {path:'final_expense_insurance',component:FinalExpenseInsuranceComponent},
 {path:'individual_life_insurance',component:IndividualLifeInsuranceComponent},
 {path:'mortgage_protection_insurance',component:MortgageProtectionInsuranceComponent},
 {path:'individual_disability_insurance',component:IndividualDisabilityInsuranceComponent},
 {path:'individual_dental_insurance',component:IndividualDentalInsuranceComponent},
 {path:'family_health_insurance',component:FamilyHealthInsuranceComponent},
 {path:'long_term_care',component:IndividualLongCareInsuranceComponent},
 {path:'individual_vision_insurance',component:IndividualVisionInsuranceComponent},
 {path:'group_disability_insurance',component:GroupDisabilityInsuranceComponent},
 {path:'group_dental_insurance',component:GroupDentalInsuranceComponent},
 {path:'group_health_insurance',component:GroupHealthInsuranceComponent},
 {path:'group_life_insurance',component:GroupLifeInsuranceComponent},
 {path:'group_long_term_insurance',component:GroupLongTermInsuranceComponent},
 {path:'trucking_insurance',component:TruckingInsuranceComponent},
 { path:'commonforms',component:CommonFormsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

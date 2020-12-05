import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-commercial-property-insurance',
  templateUrl: './commercial-property-insurance.component.html',
  styleUrls: ['./commercial-property-insurance.component.css']
})
export class CommercialPropertyInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private commercialpropertyService:CommonserviceService) { }
  // commonForm=this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',Validators.required],
  //   email:['',Validators.required],
  //   types:['',Validators.required]
  // }
  // )
  ngOnInit(): void {
    // this.commercialpropertyService.getCommercialProp().subscribe(
    //   res=>{console.log(res)}
    // )
  }
  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.commercialpropertyService.sendCommercialAuto(this.commonForm.value).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )
  // }


}

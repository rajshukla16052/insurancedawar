import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-business-insurance',
  templateUrl: './business-insurance.component.html',
  styleUrls: ['./business-insurance.component.css']
})
export class BusinessInsuranceComponent implements OnInit {
  // submitted=false;
  // showSuccessMessage:boolean;
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // phoneNumber = "/^[0-9](?:\.[0-9]{1,2})?$/";

  constructor(private fb:FormBuilder,private businessService:CommonserviceService) { }
  // commonForm =this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',[Validators.required,Validators.pattern(this.emailPattern)]],
  //   email:['',[Validators.required,Validators.email]],
  //   types:['',Validators.required]
  // })

  ngOnInit(): void {
    // this.businessService.getBusinessinsurance().subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    // )
  }
  // get f() {
  //   return this.commonForm.controls;
  // }
  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.businessService.sendBusinessEmail(this.commonForm.value).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )
  // }
  // sendMail() {
  //   this.submitted =true;
  //   if( this.commonForm.invalid) {
  //     return;
  //   }
  // else {
  //  console.log(this.commonForm.value)
  //  this.businessService.sendAutoEmail(this.commonForm.value).subscribe(
  //    res=>{
  //      console.log(res);
  //    }
  //  )

  // }

  //  }
}

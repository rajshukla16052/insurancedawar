import { Component, OnInit } from '@angular/core';

import { CommonserviceService } from '../services/commonservice.service';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-auto-insurance',
  templateUrl: './auto-insurance.component.html',
  styleUrls: ['./auto-insurance.component.css']
})
export class AutoInsuranceComponent implements OnInit {
  // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // showSucessMessage: boolean;
  // serverErrorMessages: string;
  constructor(public commonService:CommonserviceService) {
   }
 

  ngOnInit(): void {
  
  }
  // onSubmit(form:NgForm) {
  //   this.commonService.sendMailData(form.value).subscribe(
  //     res=>{
  //       this.showSucessMessage=true;
  //       setTimeout(()=>this.showSucessMessage =false,4000);
  //       this.resetForm(form);
  //     },
  //     err=>{
  //       if(err) {
  //         console.log(err);
  //       }
  //       else {
  //         this.serverErrorMessages="something went wrong";
  //       }
  //     }
  //   );
  // }
  // resetForm(form:NgForm) {
  //   this.commonService.selectedForm={
  //     name:'',
  //     phoneno:'',
  //     email:'',
  //     types:''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages="";
  // }
  // get f() {
  //   return this.commonForm.controls;
  // }

  // sendMail() {
  //   this.submitted=true;
  //   if(this.commonForm.invalid) {
  //     return ;
  //   }
  //   alert(this.commonForm.value);
  // }

  

  
}

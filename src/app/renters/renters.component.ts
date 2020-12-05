import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';


@Component({
  selector: 'app-renters',
  templateUrl: './renters.component.html',
  styleUrls: ['./renters.component.css']
})
export class RentersComponent implements OnInit {
  // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // showSucessMessage: boolean;
  // serverErrorMessages: string;

  constructor(public commonService:CommonserviceService) { }
 

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

}

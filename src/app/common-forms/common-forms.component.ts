import { Component, OnInit } from '@angular/core';
 import { FormBuilder,Validator,ReactiveFormsModule,FormGroup, Validators} from '@angular/forms';
 import { CommonserviceService } from '../services/commonservice.service';
 import {NgForm } from '@angular/forms';
 import { Iinfo } from '../interface/info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-forms',
  templateUrl: './common-forms.component.html',
  styleUrls: ['./common-forms.component.css'],
  providers:[CommonserviceService]
})
export class CommonFormsComponent implements OnInit {
  // commonForm:FormGroup;
  data;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  submitted = false;
  error: any;
  constructor(public commonService:CommonserviceService,private router:Router) {
   }
  


  ngOnInit(): void {
  //  this.commonService.getMailData(this.data).subscribe(
  //    res=>{
  //      console.log(res);
  //      this.mdata=res;
  //    }
  //  )
  this.commonService.getMailData().subscribe(
    res=>{
      console.log(res);
      this.data=res;
      console.log(res);
    }
  )
  }
 onSubmit(form:NgForm) {
   this.submitted=true;
   this.commonService.sendMailData(form.value).subscribe(
     res=>{
      //  this.showSucessMessage=true;
      alert('Success! Your message has been submitted to table, you will get the response shortly')
      //  setTimeout(()=>this.showSucessMessage=false,3000);
       this.router.navigateByUrl('/')
       this.submitted=false;
       this.resetForm(form);
      
        // this.submitted = false;
     
       //  this.showSucessMessage=true;
      //  setTimeout(()=>this.showSucessMessage =false,4000);
      //  this.resetForm(form);
     },
    //  error => {
    //   this.error = error;
    //   alert('Faled! Your message has been submitted, you will get the response shortly');
    //   this.router.navigate(['/']);
    //   this.submitted = false;
    // },
      err=>{
        this.serverErrorMessages=err;
        alert('Failed! Something went wrong')
        this.router.navigateByUrl('/')
        this.submitted=false;
      }
    
   );
 }
 resetForm(form:NgForm) {
   this.commonService.selectedForm={
     name:'',
     phoneno:'',
     email:'',
     types:''
   };
   form.resetForm();
   this.serverErrorMessages="";
 }
}

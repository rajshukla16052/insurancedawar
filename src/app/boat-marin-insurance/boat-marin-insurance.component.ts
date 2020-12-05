import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';


@Component({
  selector: 'app-boat-marin-insurance',
  templateUrl: './boat-marin-insurance.component.html',
  styleUrls: ['./boat-marin-insurance.component.css']
})
export class BoatMarinInsuranceComponent implements OnInit {
  // submitted=false;
  // showSuccessMessage:boolean;
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // phoneNumber = "/^[0-9](?:\.[0-9]{1,2})?$/";

  constructor(private fb:FormBuilder,private boatService:CommonserviceService) { }
  // commonForm =this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',[Validators.required,Validators.pattern(this.emailPattern)]],
  //   email:['',[Validators.required,Validators.pattern(this.phoneNumber)]],
  //   types:['',Validators.required]
  // })


  ngOnInit(): void {
    // this.boatService.getBoatinsurance().subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    //)
  
  }
  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.boatService.sendBoatEmail(this.commonForm.value).subscribe(
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
  //  console.log('boat marine')
  //  this.boatService.sendBoatEmail(this.commonForm.value).subscribe(
  //    res=>{
  //      console.log(res);
  //    }
  //  )

  // }

  //  }

 

}

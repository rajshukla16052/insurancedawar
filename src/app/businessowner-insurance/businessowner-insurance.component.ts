import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-businessowner-insurance',
  templateUrl: './businessowner-insurance.component.html',
  styleUrls: ['./businessowner-insurance.component.css']
})
export class BusinessownerInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private businessOwnerService:CommonserviceService) { }
  // commonForm=this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',Validators.required],
  //   email:['',Validators.required],
  //   types:['',Validators.required]
  // }
  // )

  ngOnInit(): void {
    // this.businessOwnerService.getBusinessOwner()
    // .subscribe(res=>{
    //   console.log(res);
    // })
  }
  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.businessOwnerService.sendBusinessOwner(this.commonForm.value).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )
  // }
  

}

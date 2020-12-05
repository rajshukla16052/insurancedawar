import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';
@Component({
  selector: 'app-group-disability-insurance',
  templateUrl: './group-disability-insurance.component.html',
  styleUrls: ['./group-disability-insurance.component.css']
})
export class GroupDisabilityInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private group_disabilityService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.group_disabilityService.getGroupDisability()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.group_disabilityService.sendGroupDisability(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

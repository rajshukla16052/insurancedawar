import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-group-benefits',
  templateUrl: './group-benefits.component.html',
  styleUrls: ['./group-benefits.component.css']
})
export class GroupBenefitsComponent implements OnInit {

  constructor(private fb:FormBuilder,private group_benefitsService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.group_benefitsService.getGroupBenefits()
    .subscribe(res=>{
      console.log(res)
    })
  }

  sendMail() {
    console.log(this.commonForm.value)
    this.group_benefitsService.sendGroupBenefits(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
}

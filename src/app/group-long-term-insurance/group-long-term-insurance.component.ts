import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-group-long-term-insurance',
  templateUrl: './group-long-term-insurance.component.html',
  styleUrls: ['./group-long-term-insurance.component.css']
})
export class GroupLongTermInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private group_longTermService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.group_longTermService.getGroupLongTerm()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.group_longTermService.sendGroupLongTerm(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

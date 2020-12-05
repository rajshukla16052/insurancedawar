import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-group-life-insurance',
  templateUrl: './group-life-insurance.component.html',
  styleUrls: ['./group-life-insurance.component.css']
})
export class GroupLifeInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private group_lifeService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.group_lifeService.getGroupLife()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.group_lifeService.sendGroupLife(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
}

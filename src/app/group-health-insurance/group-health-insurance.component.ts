import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-group-health-insurance',
  templateUrl: './group-health-insurance.component.html',
  styleUrls: ['./group-health-insurance.component.css']
})
export class GroupHealthInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private group_HealthService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.group_HealthService.getGroupHealth()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.group_HealthService.sendGroupHealth(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

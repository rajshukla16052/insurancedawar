import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-group-dental-insurance',
  templateUrl: './group-dental-insurance.component.html',
  styleUrls: ['./group-dental-insurance.component.css']
})
export class GroupDentalInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private group_dentalService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.group_dentalService.getGroupDental()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.group_dentalService.sendGroupDental(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

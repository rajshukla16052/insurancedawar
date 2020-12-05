import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-family-health-insurance',
  templateUrl: './family-health-insurance.component.html',
  styleUrls: ['./family-health-insurance.component.css']
})
export class FamilyHealthInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private family_healthService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.family_healthService.getFamilyHealth()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.family_healthService.sendFamilyHealth(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-mortgage-protection-insurance',
  templateUrl: './mortgage-protection-insurance.component.html',
  styleUrls: ['./mortgage-protection-insurance.component.css']
})
export class MortgageProtectionInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private mortgage_protService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.mortgage_protService.getMortgageProt()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.mortgage_protService.sendMortgageProt(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }


}

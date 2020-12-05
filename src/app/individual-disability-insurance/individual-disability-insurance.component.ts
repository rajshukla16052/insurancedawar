import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-individual-disability-insurance',
  templateUrl: './individual-disability-insurance.component.html',
  styleUrls: ['./individual-disability-insurance.component.css']
})
export class IndividualDisabilityInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private individual_disabilityService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.individual_disabilityService.getDisability()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.individual_disabilityService.sendIndDisability(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

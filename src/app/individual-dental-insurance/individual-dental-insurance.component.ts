import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-individual-dental-insurance',
  templateUrl: './individual-dental-insurance.component.html',
  styleUrls: ['./individual-dental-insurance.component.css']
})
export class IndividualDentalInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private individual_dentalService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.individual_dentalService.getIndDental()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.individual_dentalService.sendIndDental(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

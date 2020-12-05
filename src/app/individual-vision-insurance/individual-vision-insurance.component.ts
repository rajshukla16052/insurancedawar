import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-individual-vision-insurance',
  templateUrl: './individual-vision-insurance.component.html',
  styleUrls: ['./individual-vision-insurance.component.css']
})
export class IndividualVisionInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private individual_visionService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.individual_visionService.getIndVision()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.individual_visionService.sendIndLong(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

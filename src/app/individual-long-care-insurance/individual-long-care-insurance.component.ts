import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-individual-long-care-insurance',
  templateUrl: './individual-long-care-insurance.component.html',
  styleUrls: ['./individual-long-care-insurance.component.css']
})
export class IndividualLongCareInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private long_careService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.long_careService.getIndLong()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.long_careService.sendIndLong(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }


}

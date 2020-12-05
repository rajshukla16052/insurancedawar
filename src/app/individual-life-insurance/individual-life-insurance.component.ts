import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-individual-life-insurance',
  templateUrl: './individual-life-insurance.component.html',
  styleUrls: ['./individual-life-insurance.component.css']
})
export class IndividualLifeInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private individual_lifeService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.individual_lifeService.getIndLife()
    .subscribe(res=>{
      console.log(res)
    })

  }
  sendMail() {
    console.log(this.commonForm.value)
    this.individual_lifeService.sendIndLife(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

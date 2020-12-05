import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-lif-insurance',
  templateUrl: './lif-insurance.component.html',
  styleUrls: ['./lif-insurance.component.css']
})
export class LifInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private lifeService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )

  ngOnInit(): void {
    this.lifeService.getLifeIns().subscribe(
      res=>{
        console.log(res);
      }
    )
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.lifeService.sendLifeIns(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }


}

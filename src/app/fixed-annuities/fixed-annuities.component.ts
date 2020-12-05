import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-fixed-annuities',
  templateUrl: './fixed-annuities.component.html',
  styleUrls: ['./fixed-annuities.component.css']
})
export class FixedAnnuitiesComponent implements OnInit {

  constructor(private fb:FormBuilder,private fixed_annuitiesService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.fixed_annuitiesService.getFixed()
    .subscribe(res=>{
      console.log(res)
    })
  }

  sendMail() {
    console.log(this.commonForm.value)
    this.fixed_annuitiesService.sendFixed(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }


}

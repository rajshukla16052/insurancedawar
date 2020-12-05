import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-commercial-auto-insurance',
  templateUrl: './commercial-auto-insurance.component.html',
  styleUrls: ['./commercial-auto-insurance.component.css']
})
export class CommercialAutoInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private commercialautoService:CommonserviceService) { }
  // commonForm=this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',Validators.required],
  //   email:['',Validators.required],
  //   types:['',Validators.required]
  // }
  // )
  ngOnInit(): void {
    // this.commercialautoService.getCommercialAuto()
    // .subscribe(res=>{console.log(res)})
  }
  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.commercialautoService.sendCommercialAuto(this.commonForm.value).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )
  // }

}

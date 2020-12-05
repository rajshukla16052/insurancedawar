import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-workers-compensation-insurance',
  templateUrl: './workers-compensation-insurance.component.html',
  styleUrls: ['./workers-compensation-insurance.component.css']
})
export class WorkersCompensationInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private workerCompService:CommonserviceService) { }
  // commonForm=this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',Validators.required],
  //   email:['',Validators.required],
  //   types:['',Validators.required]
  // }
  // )
  ngOnInit(): void {
    // this.workerCompService.getWrokCompen().subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    // )
  }
  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.workerCompService.sendWorkCompen(this.commonForm.value).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )
  // }


}

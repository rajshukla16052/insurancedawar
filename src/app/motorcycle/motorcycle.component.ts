import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css']
})
export class MotorcycleComponent implements OnInit {

  constructor(private fb:FormBuilder,private motorcycleService:CommonserviceService) { }
  // commonForm=this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',Validators.required],
  //   email:['',Validators.required],
  //   types:['',Validators.required]
  // }
  // )

  ngOnInit(): void {
    // this.motorcycleService.getMotorcycle().
    // subscribe(res=>{
    //   console.log(res);
    // })
  }

  // sendMail() {
  //   console.log(this.commonForm.value)
  //   this.motorcycleService.sendMotorcycle(this.commonForm.value).subscribe(res=>{
  //     console.log(res)
  //   })
  // }
}

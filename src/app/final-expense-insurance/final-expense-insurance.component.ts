import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-final-expense-insurance',
  templateUrl: './final-expense-insurance.component.html',
  styleUrls: ['./final-expense-insurance.component.css']
})
export class FinalExpenseInsuranceComponent implements OnInit {

  constructor(private fb:FormBuilder,private final_expenseService:CommonserviceService) { }
  commonForm=this.fb.group({
    name:['',Validators.required],
    phoneno:['',Validators.required],
    email:['',Validators.required],
    types:['',Validators.required]
  }
  )
  ngOnInit(): void {
    this.final_expenseService.getFinalExpence()
    .subscribe(res=>{
      console.log(res)
    })
  }
  sendMail() {
    console.log(this.commonForm.value)
    this.final_expenseService.sendFinalExpence(this.commonForm.value).subscribe(
      res=>{
        console.log(res);
      }
    )
  }

}

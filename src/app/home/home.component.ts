import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonserviceService } from '../services/commonservice.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // commonForm=this.fb.group({
  //   name:['',Validators.required],
  //   phoneno:['',Validators.required],
  //   email:['',Validators.required],
  //   types:['',Validators.required]
  // })

  ngOnInit(): void {
    // this.common.getautoinsurance().subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    // )
  }
// sendMail() {
//   console.log(this.commonForm.value);
//   this.common.sendEmail(this.commonForm.value).subscribe(
//     res=>{
//       console.log(res);
//     }
//   )
// }

}

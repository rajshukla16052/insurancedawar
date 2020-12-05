import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinfo } from '../interface/info.model';


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  selectedForm:Iinfo ={
    name:'',
    phoneno:'',
    email:'',
    types:''
  };

constructor(private http:HttpClient) { }
sendMailData(data:Iinfo) {
  console.log(data);
  // console.log('new url data')
   return this.http.post('http://localhost:8080/email/email',data)
  // let headers =new Headers()
  // headers.append('Content-Type','application//json')
  // return this.http.post('http://localhost:3000/email/email',data)
}

getMailData() {
  return this.http.get('http://localhost:8080/email/email');
}

  ///---------------------------------------------
  sendEmail(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getautoinsurance() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendAutoEmail(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getAutoinsurance() {
    return this.http.get('http://localhost:3000/email/email');
  }
  sendBoatEmail(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getBoatinsurance() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendBusinessEmail(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getBusinessinsurance() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendBusinessOwner(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getBusinessOwner() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendCommercialAuto(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getCommercialAuto() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendCommercialProp(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getCommercialProp() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendFamilyHealth(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getFamilyHealth() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendFinalExpence(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getFinalExpence() {
    return this.http.get('http://localhost:3000/email/email');
  }
  sendFixed(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getFixed() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendGeneralLiab(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getGeneralLiab() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendGroupDisability(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getGroupDisability() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendGroupBenefits(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getGroupBenefits() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendGroupDental(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getGroupDental() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendDisability(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/email/email',data);
  }
  getDisability() {
    return this.http.get('http://localhost:3000/email/email');
  }

  sendGroupHealth(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getGroupHealth() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendGroupLife(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getGroupLife() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendGroupLongTerm(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getGroupLongTerm() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendHealth(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getHealth() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendHomeOwner(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getHomeOwner() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendIndDental(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getIndDental() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendIndDisability(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getIndDisability() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendIndLife(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getIndLife() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  
  sendIndLong(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getIndLong() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendIndVision(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getIndVision() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }


 sendInsCarrier(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getInsCarrier() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendLifeIns(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getLifeIns() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendMortgageProt(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getMortgageProt() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendMotorcycle(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getMotorcycle() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendTrucking(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getTrucking() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }

  sendRenter(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getRenter() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }



  sendWorkCompen(data):Observable<Iinfo>{
    console.log(data)
    return this.http.post<Iinfo>('http://localhost:3000/server/sendFormData',data);
  }
  getWrokCompen() {
    return this.http.get('http://localhost:3000/server/getFormData');
  }





}

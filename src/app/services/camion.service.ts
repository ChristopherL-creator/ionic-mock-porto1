import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  private readonly BASE_URL = 'http://localhost:8080/api/invoices';

  constructor( private http: HttpClient) { }

  getCamion(){
    return this.http.get<any>(this.BASE_URL);
  }

  parserCamionData(data: any){
    console.log(data);
  }
}

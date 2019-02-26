import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  LoginOrgId :number = 1;
  LoginOprId :number = 1;
  LoginUserId : number =1;
  API_URL  =  'http://localhost:8000';

  constructor(private  httpClient:  HttpClient) { }
}

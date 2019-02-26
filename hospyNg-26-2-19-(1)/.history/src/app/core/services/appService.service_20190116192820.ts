import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  LoginOrgId :number = 1;
  LoginOprId :number = 1;
  LoginUserId : number =1;

  constructor() { }
}

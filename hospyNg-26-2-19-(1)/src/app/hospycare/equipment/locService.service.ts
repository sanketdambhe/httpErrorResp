import { Injectable } from '@angular/core';
import { lmLocationMst } from './locInterfaces';
import { AppServiceService } from '../../core/services/appService.service';
import { Options } from 'selenium-webdriver/firefox';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const getUrl = "http://192.168.0.128:8085/gmLocMst/getLoc";
// const getby = "http://192.168.0.128:8085/gmLocMst/getLocMstId";
// const deleteUrl = "http://192.168.0.128:8085/gmLocMst/deleteLoc";
// const postUrl = "http://192.168.0.128:8085/gmLocMst/postlocdt";
// const putUrl = "http://192.168.0.128:8085/gmLocMst/putLoc";

const apiUrl = "http://192.168.0.128:8085/gmLocMst/"




@Injectable({
  providedIn: 'root'
})
export class LocServiceService {

  locationList: lmLocationMst[] = [
    {
      code: 'EQ1', name: 'Equipment Name1',
      mobile: '8983708064', type: 's', defunct: 'N', allowIssue: 'N', allowTransfer: 'N', email: 'email1@gmail.com', address: 'address1'
    },
    {
     code: 'EQ2', name: 'Equipment Name2',
      mobile: '8983708062', type: 's', defunct: 'Y', allowIssue: 'N', allowTransfer: 'N', email: 'email2@gmail.com', address: 'address1'
    }
  ];


  constructor(private appService: AppServiceService, private http: HttpClient) { }
  // ---------------------------------------------------------------------------------------
  // get location_list
  getLocationList(): Observable<lmLocationMst[]> {
    return this.http.get<lmLocationMst[]>(apiUrl)
      .pipe(
        tap(locationList => console.log('Fetch location List')),
        catchError(this.handleError(' getLocationList', []))
      );
  }




  
  //get location by Id
  getLocationbyId(id: number): Observable<lmLocationMst> {
    console.log("get location id in service = ", id)
    const url = `${apiUrl}/${id}`;
    console.log("get location by id url is = ", url)
    return this.http.get<lmLocationMst>(url).pipe(
      tap(_ => console.log(`fetched location id=${id}`)),
      catchError(this.handleError<lmLocationMst>(`getLocationbyId id=${id}`))
    );
  }




  //delete location_list by id
  deleteLocationbyId(id): Observable<lmLocationMst> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<lmLocationMst>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted location id=${id}`)),
      catchError(this.handleError<lmLocationMst>('deleteLocationbyId'))
    );
  }

  //post location_list 
  createLocation(lmLocationMst): Observable<lmLocationMst> {
    console.log("value for sservice file", lmLocationMst)
    return this.http.post<lmLocationMst>(apiUrl, lmLocationMst, httpOptions).pipe(
      tap((lmLocationMst: lmLocationMst) => console.log(`added location w/ id=${lmLocationMst.id}`)),
      catchError(this.handleError<lmLocationMst>('createLocation'))
    );
  }




  

  //update location by Id
  updateProduct(id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  // -----------------------------------------------------------------------------------------
  getLocationNull(): lmLocationMst {
    return {
      id: null, code: null, name: null, type: null,
      defunct: 'N', mobile: null, allowIssue: 'N', allowTransfer: 'N', email: null, address: null 
    };
  }

  // getLocationList() : lmLocationMst []
  // {
  //     return this.locationList;
  // }

  // deleteLocationbyId (Id : number)  {
  //   this.locationList = this.locationList.filter(e => !(e.orgid == this.appService.LoginOrgId 
  //     && e.oprid == this.appService.LoginOprId && e.locId == Id));      
  // }

  // createLocation (eqmMst :lmLocationMst) {
  //   eqmMst.locId=this.locationList.length +1;
  //   this.locationList.push(eqmMst);
  // }

  // getLocationbyId(Id: number): lmLocationMst {
  //   return this.locationList.find(e => e.orgid == this.appService.LoginOrgId
  //     && e.oprid == this.appService.LoginOprId && e.locId == Id);
  // }


  editLocation(Id: number, eqmMst: lmLocationMst) {

    // eqmMst._modifyBy = this.appService.LoginUserId;
    // eqmMst._modifyDt = new Date();

    // this.locationList = this.locationList.map(e => {
    //   if (e.orgid == this.appService.LoginOrgId && e.oprid == this.appService.LoginOprId && e.locId == Id)
    //     return eqmMst
    //   else return e
    // });

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
 
      console.error(error) //to print all  array of HttpErrorResponse
      console.error(error.error);  // to print array of error from array of HttpErrorResponse 
      const respErr = error.error  
      console.log(respErr.statusCode) // to print statusCode from array of error
      console.log(respErr.errorMessage) // to print errorMessage from array of error
      alert( respErr.statusCode + "=" +respErr.errorMessage,);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}




import { Injectable } from '@angular/core';
import { pmPartyMst } from './partyInterfaces';
import { AppServiceService } from '../../core/services/appService.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const getUrl = "http://192.168.0.128:8085/prtmst/";
const getby = "http://192.168.0.128:8085/prtmst";
const deleteUrl = "http://192.168.0.128:8085/prtmst";
const postUrl = "http://192.168.0.128:8085/prtmst/";
const putUrl = "http://192.168.0.128:8085/prtmst";

@Injectable({
  providedIn: 'root'
})
export class partyServiceService {

  partyList: pmPartyMst[] = [
    {
      type:'1',id:1,code:'12',name:'chetak',contactPerson:'12345',email:'chetak@gmail.com',mobile:'787878',address:'test',defunct:'N',
    }
   
  ];

  constructor(private appService: AppServiceService, private http: HttpClient) { }
  // ---------------------------------------------------------------------------------------
  // get party_list
  getPartyList(): Observable<pmPartyMst[]> {
    return this.http.get<pmPartyMst[]>(getUrl)
      .pipe(
        tap(partyList => console.log('Fetch party List')),
        catchError(this.handleError(' getPartyList', []))
      );
  }


  //get party by Id
  getPartybyId(id: number): Observable<pmPartyMst> {
    console.log("get party id in service = ", id)
    const url = `${getby}/${id}`;
    console.log("get party by id url is = ", url)
    return this.http.get<pmPartyMst>(url).pipe(
      tap(_ => console.log(`fetched party id=${id}`)),
      catchError(this.handleError<pmPartyMst>(`getPartyId id=${id}`))
    );
  }

  //delete party_list by id
  deletePartybyId(id): Observable<pmPartyMst> {
    const url = `${deleteUrl}/${id}`;
    return this.http.delete<pmPartyMst>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted party id=${id}`)),
      catchError(this.handleError<pmPartyMst>('deletePartybyId'))
    );
  }

  //post party_list 
  createParty(pmPartyMst): Observable<pmPartyMst> {
    console.log("value for sservice file", pmPartyMst)
    return this.http.post<pmPartyMst>(postUrl, pmPartyMst, httpOptions).pipe(
      tap((pmPartyMst: pmPartyMst) => console.log(`added party w/ id=${pmPartyMst.id}`)),
      catchError(this.handleError<pmPartyMst>('createParty'))
    );
  }



  //update party by Id
  updateParty(id, product): Observable<any> {
    const url = `${putUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated party id=${id}`)),
      catchError(this.handleError<any>('updateParty'))
    );
  }

  // -----------------------------------------------------------------------------------------
  getPartyNull(): pmPartyMst {
    return {
      type:null,id:null,code:null,name:null,contactPerson:null,email:null,mobile:null,address:null,defunct:'N'
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


  // editLocation(Id: number, eqmMst: pmPartyMst) {

    // eqmMst._modifyBy = this.appService.LoginUserId;
    // eqmMst._modifyDt = new Date();

    // this.locationList = this.locationList.map(e => {
    //   if (e.orgid == this.appService.LoginOrgId && e.oprid == this.appService.LoginOprId && e.locId == Id)
    //     return eqmMst
    //   else return e
    // });

  // }


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

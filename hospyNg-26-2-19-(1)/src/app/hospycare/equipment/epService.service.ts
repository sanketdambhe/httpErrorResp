import { Injectable } from '@angular/core';
import { emEquipmentMst } from './eqInterfaces';
import { AppServiceService } from '../../core/services/appService.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://192.168.0.128:8085/gmEqpMst/";

@Injectable({
  providedIn: 'root'
})
export class EpServiceService {

  equipList: emEquipmentMst[] = [
    // {},
  ];

  constructor(private appService: AppServiceService, private http: HttpClient) { }

  getEquipmentNull(): emEquipmentMst {
    return {
      code: null, name: null, modelNo: null, srNo: null, defunct: 'N'
    };
  }


  // get equipment_list
  getEquipmentList(): Observable<emEquipmentMst[]> {
    return this.http.get<emEquipmentMst[]>(apiUrl)
      .pipe(
        tap(equipmentList => console.log('Fetch equipment List')),
        catchError(this.handleError(' getEquipmentList', []))
      );
  }

  //get equipment by Id
  getEquipmentbyId(id: number): Observable<emEquipmentMst> {
    console.log("get equipment id in service = ", id)
    const url = `${apiUrl}${id}`;
    console.log("get equipment by id url is = ", url)
    return this.http.get<emEquipmentMst>(url).pipe(
      tap(_ => console.log(`fetched equipment id=${id}`)),
      catchError(this.handleError<emEquipmentMst>(`getEquipmentbyId id=${id}`))
    );
  }

  //delete equipment_list by id
  deleteEquipmentbyId(id): Observable<emEquipmentMst> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<emEquipmentMst>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted equipment id=${id}`)),
      catchError(this.handleError<emEquipmentMst>('deleteEquipmentbyId'))
    );
  }

  //post equipment_list 
  createEquipment(emEquipmentMst): Observable<emEquipmentMst> {
    console.log("value for sservice file", emEquipmentMst)
    return this.http.post<emEquipmentMst>(apiUrl, emEquipmentMst, httpOptions).pipe(
      tap((emEquipmentMst: emEquipmentMst) => console.log(`added equipment w/ id=${emEquipmentMst.id}`)),
      catchError(this.handleError<emEquipmentMst>('createEquipment'))
    );
  }

  //update equipment by Id
  editEquipment(id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated equipment id=${id}`)),
      catchError(this.handleError<any>('editEquipment'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error("status code = ",`${(error).statusCode}`); 

      console.error("Error 1",error) //to print all  array of HttpErrorResponse
      console.error("Error 2",error.error);  // to print array of error from array of HttpErrorResponse 
      const respErr = error.error  
      console.log(respErr.statusCode) // to print statusCode from array of error
      console.log(respErr.errorMessage) // to print errorMessage from array of error
      alert( respErr.statusCode + "=" +respErr.errorMessage,);
      // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // private catchHttpError = <T>() =>
  // catchError<T, T>((error: HttpErrorResponse) => {
  //   const msg = `${error.status} ${error.statusText} -  ${error.url}`;

  //   return throwError(new Error(msg));
  // });

// private apiPipe = <T>() => pipe(share(), this.catchHttpError<T>());



}

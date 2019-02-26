import { Injectable } from '@angular/core';
import { dmDepartmentMst } from './deptInterfaces';
import { AppServiceService } from '../../core/services/appService.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://192.168.0.128:8085/gmDepMst/";


@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {

  deptList: dmDepartmentMst[] = [
    {
      code: 'D00011', name: 'LABORATORY3', type: 'D', storeLocId: null, aprvlGroup: 0, defunct: 'N'
    }
  ];

  constructor(private appService: AppServiceService, private http: HttpClient) { }
  // ---------------------------------------------------------------------------------------
  // get Department_list
  getDepartmentList(): Observable<dmDepartmentMst[]> {
    return this.http.get<dmDepartmentMst[]>(apiUrl)
      .pipe(
        tap(departmentList => console.log('Fetch department List')),
        catchError(this.handleError(' getDepartmentList()', []))
      );
  }


  //get Department by Id
  getDepartmentbyId(id: number): Observable<dmDepartmentMst> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<dmDepartmentMst>(url).pipe(
      tap(_ => console.log(`fetched department id=${id}`)),
      catchError(this.handleError<dmDepartmentMst>(`getProduct id=${id}`))
    );
  }

  //delete Department_list by id
  deleteDepartmentbyId(id): Observable<dmDepartmentMst> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<dmDepartmentMst>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted department id=${id}`)),
      catchError(this.handleError<dmDepartmentMst>('deleteDepartmentbyId'))
    );
  }

  //post Department_list 
  createDepartment(dmDepartmentMst): Observable<dmDepartmentMst> {
    console.log("value for sservice file", dmDepartmentMst)
    return this.http.post<dmDepartmentMst>(apiUrl, dmDepartmentMst, httpOptions).pipe(
      tap((dmDepartmentMst: dmDepartmentMst) => console.log(`added department w/ id=${dmDepartmentMst.id}`)),
      catchError(this.handleError<dmDepartmentMst>('createDepartment'))
    );
  }



  //update Department by Id
  updateDepartment(id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  // -----------------------------------------------------------------------------------------
  getDepartmentNull(): dmDepartmentMst {
    return {
      id: null, code: null, name: null, type: null, storeLocId: null, aprvlGroup: 0, defunct: 'N'
    };
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

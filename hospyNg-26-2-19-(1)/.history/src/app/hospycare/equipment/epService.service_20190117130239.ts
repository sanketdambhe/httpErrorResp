import { Injectable } from '@angular/core';
import { emEquipmentMst } from './eqInterfaces';
import { HttpClient} from  '@angular/common/http';
import { AppServiceService } from '../../core/services/appService.service';

@Injectable({
  providedIn: 'root'
})
export class EpServiceService {
  

  equipList : emEquipmentMst[] = [

    {orgid : 1, oprid : 1, eqmId : 1, eqmCd : 'EQ1', eqmName : 'Equipment Name1', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM1', _asstCd : 'ASST1', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 2, eqmCd : 'EQ2', eqmName : 'Equipment Name2', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM2', _asstCd : 'ASST2', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 3, eqmCd : 'EQ3', eqmName : 'Equipment Name3', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 4, eqmCd : 'EQ4', eqmName : 'Equipment Name4', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},
    
    {orgid : 1, oprid : 1, eqmId : 5, eqmCd : 'EQ5', eqmName : 'Equipment Name5', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},
    
    {orgid : 1, oprid : 1, eqmId : 6, eqmCd : 'EQ6', eqmName : 'Equipment Name6', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 7, eqmCd : 'EQ7', eqmName : 'Equipment Name7', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},    

    {orgid : 1, oprid : 1, eqmId : 8, eqmCd : 'EQ8', eqmName : 'Equipment Name8', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},
    
    {orgid : 1, oprid : 1, eqmId : 9, eqmCd : 'EQ9', eqmName : 'Equipment Name9', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},
    
    {orgid : 1, oprid : 1, eqmId : 10, eqmCd : 'EQ10', eqmName : 'Equipment Name10', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')},
    
    {orgid : 1, oprid : 1, eqmId : 11, eqmCd : 'EQ11', eqmName : 'Equipment Name11', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : 1, _createdDt : new Date('16/00/2019')}    

  ];

  constructor(private appService : AppServiceService, private  httpClient:  HttpClient) { }

  getEquipmentNull () : emEquipmentMst {    
    return {orgid : this.appService.LoginOrgId , oprid : this.appService.LoginOprId, 
    eqmId : -1, eqmCd : null, eqmName : null, 
    itemId : null, asstId : null, genManId : null, venId : null, eqmModelNo : null,eqmSrNo : null,
    eqmPurDt : null, eqmInstlDt : null, eqmOwnerDeptid : null, 
    eqmLocid : null, eqmAmt : null, eqmRemark : null, eqmDefunct : 'N', 
    _itemCd : null, _asstCd : null, _ManName : null, _venName : null,
    _ownerDeptName : null, _LocName : null, 
    _createdBy : this.appService.LoginUserId, _createdDt : new Date()};
  }

  getEquipmentList() : emEquipmentMst []
  {
      return this.equipList;
  }

  getEquipmentbyId (Id : number) : emEquipmentMst {    
    return this.equipList.find(e => e.orgid == this.appService.LoginOrgId 
      && e.oprid == this.appService.LoginOprId && e.eqmId == Id);
  }

  deleteEquipmentbyId (Id : number)  {
    this.equipList = this.equipList.filter(e => !(e.orgid == this.appService.LoginOrgId 
      && e.oprid == this.appService.LoginOprId && e.eqmId == Id));      
  }
  
  createEquipment (eqmMst :emEquipmentMst) {
    eqmMst.eqmId=this.equipList.length +1;
    this.equipList.push(eqmMst);
  }

  editEquipment (Id:number, eqmMst :emEquipmentMst) {

    eqmMst._modifyBy = this.appService.LoginUserId;
    eqmMst._modifyDt = new Date();

    this.equipList = this.equipList.map(e=> {
       if (e.orgid == this.appService.LoginOrgId && e.oprid == this.appService.LoginOprId && e.eqmId == Id) 
       return eqmMst
       else return e
    });
    
  }  
  
}

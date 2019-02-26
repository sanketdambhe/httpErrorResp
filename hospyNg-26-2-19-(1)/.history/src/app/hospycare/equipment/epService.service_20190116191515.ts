import { Injectable } from '@angular/core';
import { emEquipmentMst } from './eqInterfaces';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpServiceService {
  
  API_URL  =  'http://localhost:8000';

  equipList : emEquipmentMst[] = [

    {orgid : 1, oprid : 1, eqmId : 1, eqmCd : 'EQ1', eqmName : 'Equipment Name1', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM1', _asstCd : 'ASST1', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 2, eqmCd : 'EQ2', eqmName : 'Equipment Name2', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM2', _asstCd : 'ASST2', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 3, eqmCd : 'EQ3', eqmName : 'Equipment Name3', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019')},

    {orgid : 1, oprid : 1, eqmId : 4, eqmCd : 'EQ4', eqmName : 'Equipment Name4', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019')}    

  ];

  constructor(private  httpClient:  HttpClient) { }

  getEquipmentEmpty (orgid: number, oprid : number) : emEquipmentMst {    
    return {orgid : orgid, oprid : oprid, eqmId : -1, eqmCd : null, eqmName : null, 
    itemId : null, asstId : null, genManId : null, venId : null, eqmModelNo : null,eqmSrNo : null,
    eqmPurDt : null, eqmInstlDt : null, eqmOwnerDeptid : null, 
    eqmLocid : null, eqmAmt : null, eqmRemark : null, eqmDefunct : 'N', 
    _itemCd : null, _asstCd : null, _ManName : null, _venName : null,
    _ownerDeptName : null, _LocName : null, 
    _createdBy : null, _createdDt : new Date()};
  }

  getEquipmentList() : emEquipmentMst []
  {
      return this.equipList;
  }

  getEquipmentbyId (orgid: number, oprid : number, Id : number) : emEquipmentMst {    
    return this.equipList.find(e => e.orgid == orgid && e.oprid == oprid && e.eqmId == Id);
  }

  deleteEquipmentbyId (orgid: number, oprid : number, Id : number)  {
    this.equipList = this.equipList.filter(e => !(e.orgid == orgid && e.oprid == oprid && e.eqmId == Id));      
  }
  
  createEquipment (eqmMst :emEquipmentMst) {
    this.equipList.push(eqmMst);
  }

  editEquipment (orgid: number, oprid : number, Id : number, eqmMst :emEquipmentMst) {
    this.equipList.forEach(e => {
      if (e.orgid == orgid && e.oprid == oprid && e.eqmId == Id)
      {
        e.eqmCd = eqmMst.eqmCd;
        e.eqmName = eqmMst.eqmName;
        e.eqmModelNo = eqmMst.eqmModelNo;
        e.eqmSrNo = eqmMst.eqmSrNo;
        e.eqmAmt = eqmMst.eqmAmt;
        e.eqmRemark = eqmMst.eqmRemark;
        e.eqmDefunct = eqmMst.eqmDefunct;
        e.eqmPurDt = eqmMst.eqmPurDt;
        e.eqmInstlDt = eqmMst.eqmInstlDt;
        e.itemId = eqmMst.itemId;
        e.asstId = eqmMst.asstId;
        e.genManId = eqmMst.genManId;
        e.venId = eqmMst.venId;
      }
    });
  }  
  
}

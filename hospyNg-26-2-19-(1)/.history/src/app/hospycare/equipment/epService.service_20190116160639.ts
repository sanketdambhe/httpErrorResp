import { Injectable } from '@angular/core';
import { emEquipmentMst } from './eqInterfaces';

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
    _createdBy : '1', _createdDt : new Date('16/00/2019'), _srno: 1},

    {orgid : 1, oprid : 1, eqmId : 2, eqmCd : 'EQ2', eqmName : 'Equipment Name2', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM2', _asstCd : 'ASST2', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019'), _srno: 2},

    {orgid : 1, oprid : 1, eqmId : 3, eqmCd : 'EQ3', eqmName : 'Equipment Name3', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019') , _srno: 3},

    {orgid : 1, oprid : 1, eqmId : 4, eqmCd : 'EQ4', eqmName : 'Equipment Name4', 
    itemId : 1, asstId : 1, genManId : 1, venId : 1, eqmModelNo : 'Model No. 1',eqmSrNo : 1,
    eqmPurDt : new Date("10/04/2018"), eqmInstlDt : new Date('12/02/2018'), eqmOwnerDeptid : 1, 
    eqmLocid : 1, eqmAmt : 1000, eqmRemark : 'test Remarks', eqmDefunct : 'N', 
    _itemCd : 'ITM3', _asstCd : 'ASST3', _ManName : 'XYZ Manufacture', _venName : 'ABC Vender',
    _ownerDeptName : 'OT Department', _LocName : 'OT Location', 
    _createdBy : '1', _createdDt : new Date('16/00/2019') , _srno: 4}    

  ];

  constructor() { }

  getEquipmentList() : emEquipmentMst []
  {
      return this.equipList;
  }
}

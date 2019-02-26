export interface emEquipmentMst {
    orgid : number,
    oprid : number,
    eqmId : number,
    eqmCd : string,
    eqmName : string,
    itemId ?: number,
    asstId ?: number,
    genManId : number,
    venId : number,
    eqmModelNo : string,
    eqmSrNo : number,
    eqmPurDt : Date,
    eqmInstlDt : Date,
    eqmOwnerDeptid : number,
    eqmLocid : number,
    eqmAmt : number,
    eqmRemark : string,
    eqmDefunct : string,
    eqmImg1 ?: string,
    eqmImg2 ?: string,
    eqmImg3 ?: string,
    eqmTechDoc ?: string,
    eqmManualDoc ?: string,
    eqmPrevNextdt ?: Date,
    eqmCondmnDt ?:Date,
    _itemCd ?: string,
    _asstCd ?: string,
    _ManName ?: string,
    _venName ?: string,
    _ownerDeptName ?: string,
    _LocName ?: string,
    _createdBy ?: string,
    _createdDt ?: Date    
};
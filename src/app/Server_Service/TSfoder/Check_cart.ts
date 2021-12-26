export class Check {
    id = 0;
    id_user = 0;
    ngaytao = "";
    trangthai = 0;
    constructor(id:number,id_user:number,ngaytao:string,trangthai:number){
        this.id = id,
        this.id_user = id_user,
        this.ngaytao = ngaytao,
        this.trangthai = trangthai
    }
}
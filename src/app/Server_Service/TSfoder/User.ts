export class User {
    id = 0;
    name = "";
    phone = 0;
    username = "";
    password = ""
    constructor(id:number, name:string, phone:number, username : string, password: string){
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.username = username,
        this.password = password
    }
}
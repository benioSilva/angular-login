import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {
    qualquerCoisa = 1
    listUser: any 

    public test(){
        console.log('testando')
    }
    public getUserList(){
        return JSON.parse(localStorage.getItem('dadosRegistrados') || "[]")
    }

    public setUserList(listUser: any){
        return localStorage.setItem('dadosRegistrados', JSON.stringify(listUser))
    }
}
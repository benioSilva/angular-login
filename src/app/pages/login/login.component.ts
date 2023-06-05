import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  RouterLink  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {}

  
  getStorageDados() {
    return JSON.parse(localStorage.getItem('dadosRegistrados') || "[]")
  }

  onclickValidarDados(form: any): any {
    let dadosStorage = this.getStorageDados()
    dadosStorage = dadosStorage.filter(function(element: any){
      console.log(element.username == form.value.usernameLogin)
      return element.username == form.value.usernameLogin
    })
    
    if(dadosStorage.length == 1){
      console.log("ok")
        if(dadosStorage[0].password == form.value.senhaLogin){
           window.location.href = "http://localhost:4200/cadastros"
          alert("pagina cadastro")
          return  
        } 
        
      
    } 
    alert("usuario ou senha invalidos")
  }
  constructor(){

  }

  ngOnInit(){
  }

}

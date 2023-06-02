import { Component, OnInit } from '@angular/core';

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

  onclickValidarDados(form: any) {
    const dadosStorage = this.getStorageDados()
    dadosStorage.filter(function(element: any){
      console.log(element)
    })
    
    console.log(dadosStorage)
    if(this.form.usernameLogin){ 
      
    }
  }
  constructor(){

  }

  ngOnInit(){
  }

}

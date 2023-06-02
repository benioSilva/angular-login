import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {
  getStorageDados() {
    return JSON.parse(localStorage.getItem('dadosRegistrados') || "[]")
  }
  
  cadastros: any = this.getStorageDados();
  
  trocaDeStatus(){
    
    if(this.cadastros.status == "Desativado"){
      this.cadastros.status = "Ativado"
      localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
      console.log(this.cadastros)
    } else{
      this.cadastros.status = "Desativado"
      localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
      console.log(this.cadastros)
    }
  
  }
  constructor(){

  }

  ngOnInit() {
  this.trocaDeStatus()
  }
 
}

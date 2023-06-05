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
  index = ""
  id = ""
  
  // trocaDeStatus(index: any){
    
  //   if(this.cadastros[index].status == "Desativado"){
  //     this.cadastros[index].status = "Ativado"
  //     localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
  //     console.log(this.cadastros)
  //   } else{
  //     this.cadastros[index].status = "Desativado"
  //     localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
  //     console.log(this.cadastros)
  //   }
  
  //}

  excluirCadastro(id: any){
    this.cadastros=this.cadastros.filter(function(element: any){
      return id != element.id 
    })
    localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
  }

  toggleStatus(id:any){
    for (let index = 0; index < this.cadastros.length; index++) {
      const element = this.cadastros[index];
      
      if(element.id == id){
        if(element.status == "Desativado"){
        element.status = 'Ativado'
        localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
        console.log(element.status)
        } else{
          element.status = "Desativado"
        localStorage.setItem('dadosRegistrados', JSON.stringify(this.cadastros))
        }
      } 
      
    }
      
  }
  constructor(){

  }

  ngOnInit() {
  
  }
 
}

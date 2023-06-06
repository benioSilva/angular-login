import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {


  cadastros: any = [];
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


  constructor(private usuarioSrv: UsuarioService) {

  }

  ngOnInit() {
    this.cadastros = this.usuarioSrv.getUserList()
  }

  excluirCadastro(id: any) {
    this.cadastros = this.cadastros.filter(function (element: any) {
      return id != element.id
    })
    this.usuarioSrv.setUserList(this.cadastros)
  }

  toggleStatus(id: any) {
    for (let index = 0; index < this.cadastros.length; index++) {
      const element = this.cadastros[index];

      if (element.id == id) {
        if (element.status == "Desativado") {
          element.status = 'Ativado'
          this.usuarioSrv.setUserList(this.cadastros)
          console.log(element.status)
        } else {
          element.status = "Desativado"
          this.usuarioSrv.setUserList(this.cadastros)
        }
      }

    }

  }
}

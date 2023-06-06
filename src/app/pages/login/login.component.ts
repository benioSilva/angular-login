import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {}

  constructor(private usuarioSrv: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioSrv.test()
  }

  onclickValidarDados(form: any): any {
    let dadosStorage = this.usuarioSrv.getUserList()
    dadosStorage = dadosStorage.filter(function (element: any) {
      return element.username == form.value.usernameLogin
    })

    if (dadosStorage.length == 1) {
      if (dadosStorage[0].password == form.value.senhaLogin) {
        window.location.href = "http://localhost:4200/cadastros"
        alert("pagina cadastro")
        return
      }
    }
    alert("usuario ou senha invalidos")
  }
}

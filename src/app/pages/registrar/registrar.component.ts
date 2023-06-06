import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  form: any = {}



  constructor(private usuarioSrv: UsuarioService) { }
  ngOnInit() {
    if (this.usuarioSrv.getUserList().length == 0) {
      localStorage.removeItem('dadosRegistrados')
    }


  }



  verificarUsername(form: any): any {
    let dadosStorage = this.usuarioSrv.getUserList()
    dadosStorage = dadosStorage.filter(function (element: any) {
      return element.username == form.value.username
    })
    if (dadosStorage.length == 1) {
      if (dadosStorage[0].username == form.value.username) {
        return true
      }
    }
  }

  generateId() {
    return new Date().getTime()
  }
  onclickSalvar(form: any) {

    if (!this.form.username || !this.form.username.trim()) {
      return alert("preencher campo username")
    }
    if (!this.form.email || !this.form.email.trim()) {
      return alert("preencher campo email")
    }
    if (!this.form.password || !this.form.password.trim()) {
      return alert("preencher campo password")
    }
    if (!this.form.repeatPassword || !this.form.repeatPassword.trim()) {
      return alert("preencher campo repeat-password")
    }

    if (this.form.password != this.form.repeatPassword) {
      return alert("senhas não conferem")

    } else if (this.verificarUsername(form)) {
      return alert('username já cadastrado')
    } else {
      this.form.id = this.generateId()
      this.form.status = "Desativado"
      const cadastros = this.usuarioSrv.getUserList()

      cadastros.push(this.form)
      this.usuarioSrv.setUserList(cadastros)

      alert('usuario registrado')
      this.form = {}
    }

  }


}
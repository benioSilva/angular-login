import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  form: any = {}
  

  getStorageDados() {
    return JSON.parse(localStorage.getItem('dadosRegistrados') || "[]")
  }
  constructor() { }
  ngOnInit() {


  }

  verificarUsername(form: any): any {
    console.log(form.value)
    let dadosStorage = this.getStorageDados()
    dadosStorage.filter(function (element: any) {
      console.log(element.username == form.value.username)
      return element.username == form.value.username
    })
    if (dadosStorage.length == 1) {
      if (dadosStorage[0].username == form.value.username) {
        return true
      }
    }
  }

  generateId(){
    return new Date().getTime()
  }
  onclickSalvar(form: any) {
    console.log(form.value)
    if (!this.form.username || !this.form.username.trim()) {
      return alert("preencher campo username")
    }
    console.log(this.form.username)
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
      alert('username já cadastrado')
    } else {
      this.form.id = this.generateId()
      this.form.status = "Desativado"
      const cadastros = this.getStorageDados()
      console.log(cadastros)
      cadastros.push(this.form)
      localStorage.setItem('dadosRegistrados', JSON.stringify(cadastros))

      alert('usuario registrado')
      this.form = {}
    }

  }


}
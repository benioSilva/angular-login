import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  valorAtualUsername: string = ''
  valorAtualEmail: string = ''
  valorAtualPassword: string = ''
  valorAtualRepeatPassword: string = ''

  constructor(){ }
  ngOnInit() {
   
    
  }
  
  onclickSalvar() {
    if (!this.valorAtualUsername || !this.valorAtualUsername.trim()) {
      return alert("preencher campo username")
    }
    if (!this.valorAtualEmail || !this.valorAtualEmail.trim()) {
      return alert("preencher campo email")
    }
    if (!this.valorAtualPassword || !this.valorAtualPassword.trim()) {
      return alert("preencher campo password")
    }
    if (!this.valorAtualRepeatPassword || !this.valorAtualRepeatPassword.trim()) {
      return alert("preencher campo repeat-password")
    }

    if (this.valorAtualPassword != this.valorAtualRepeatPassword) {
      return alert("senhas não conferem")

    } else {
      let listaDados = {
        username: this.valorAtualUsername,
        email: this.valorAtualEmail,
        password: this.valorAtualPassword,
        repeat: this.valorAtualRepeatPassword

      }
      alert('usuario registrado')
      console.log(listaDados)



      this.valorAtualUsername = ""
      this.valorAtualEmail = ""
      this.valorAtualPassword = ""
      this.valorAtualRepeatPassword = ""
    }
  }

  onKeyUpUsername(evento: KeyboardEvent) {
    this.valorAtualUsername = (<HTMLInputElement>evento.target).value;
  }
  onKeyUpEmail(evento: KeyboardEvent) {
    this.valorAtualEmail = (<HTMLInputElement>evento.target).value;
  }
  onKeyUpPassword(evento: KeyboardEvent) {
    this.valorAtualPassword = (<HTMLInputElement>evento.target).value;
  }
  onKeyUpRepeatPassword(evento: KeyboardEvent) {
    this.valorAtualRepeatPassword = (<HTMLInputElement>evento.target).value;
  }

  
}
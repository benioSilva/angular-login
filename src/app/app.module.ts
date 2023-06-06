import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioService } from './service/usuario.service';

const routes: Route[] = [
  { path: '', redirectTo: 'registrar', pathMatch: 'full' },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastros', component: CadastrosComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    CadastrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

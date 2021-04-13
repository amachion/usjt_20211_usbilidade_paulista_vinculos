import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vinculos';

  nome = "Jose";
  idade = 20;
  esconderCaixa=true;

  lancarDados() {
    return Math.floor(Math.random() * 6 + 1);
  }

  alterarNome(nome) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }

  adicionar(nomeInput) {
    console.log(nomeInput.value);
    this.esconderCaixa = nomeInput.value.length <= 0;
    this.nome = nomeInput.value;
  }

  numero: number;
  escolher (){
    this.numero = Math.floor(Math.random() * 100) + 1;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() : void {
    alert("Novo pensamento criado!");
  }

  cancelar() : void {
    this.pensamento = {
      id:'',
      conteudo:'',
      autoria:'',
      modelo:''
    }
  }
}

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
    modelo: 'modelo1'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() : void {
    alert("Novo pensamento criado!");
  }
}

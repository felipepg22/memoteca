import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Pensamento 1',
      autoria: 'Autor 1',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Pensamento 2',
      autoria: 'Autor 2',
      modelo: 'modelo2'
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }

}

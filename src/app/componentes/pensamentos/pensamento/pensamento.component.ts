import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {


  @Input() pensamento : Pensamento = {

              id: 0,
              conteudo: 'teste',
              autoria: 'abc bolinhas',
              modelo: 'modelo3',
              favorito: false
            };

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {

    return this.pensamento.conteudo.length > 256 ? 'pensamento-g' : 'pensamento-p';
  }

  verificaIconeFavorito(): string {

    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }
}

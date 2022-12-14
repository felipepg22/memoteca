import { Component, Input, OnInit } from '@angular/core';

import { Pensamento } from './../pensamento';
import { PensamentoService } from './../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {


  @Input() pensamento: Pensamento = {

              id: 0,
              conteudo: 'teste',
              autoria: 'abc bolinhas',
              modelo: 'modelo3',
              favorito: false
            };

  @Input() listaFavoritos: Pensamento[] = [];

  constructor( private readonly service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {

    return this.pensamento.conteudo.length > 256 ? 'pensamento-g' : 'pensamento-p';
  }

  verificaIconeFavorito(): string {

    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }

  atualizaFavoritos(): void {
    this.service.mudarFavorito(this.pensamento).subscribe( () => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
    });
  }
}

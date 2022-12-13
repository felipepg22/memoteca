import { Component, OnInit } from '@angular/core';

import { Pensamento } from './../pensamento';
import { PensamentoService } from './../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  haMaisPensamentos: boolean = true;
  paginaAtual: number = 1;
  filtro: string = '';

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe( listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);

      if(!listaPensamentos.length)
        this.haMaisPensamentos = false;
    })
  }

  buscarPensamentos(): void {
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro)
                .subscribe(listaPensamentos => {
                  this.listaPensamentos = listaPensamentos;
                  this.haMaisPensamentos = listaPensamentos.length > 6;
                })
  }
}

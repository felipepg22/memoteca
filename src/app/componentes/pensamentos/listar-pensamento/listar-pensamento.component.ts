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
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.buscarTodosPensamentos();
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

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
                .subscribe(listaPensamentos => {
                  this.listaPensamentos = listaPensamentos;
                  this.haMaisPensamentos = listaPensamentos.length > 6;
                })
  }

  buscarFavoritos(): void {
    this.paginaAtual = 1;
    this.favoritos = true;

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
                .subscribe(listaPensamentosFavoritos => {
                  this.listaPensamentos = listaPensamentosFavoritos;
                  this.haMaisPensamentos = listaPensamentosFavoritos.length > 6;
                  this.listaFavoritos = listaPensamentosFavoritos;
                })
  }

  buscarTodosPensamentos() {
    this.service.listar(this.paginaAtual).subscribe( listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}


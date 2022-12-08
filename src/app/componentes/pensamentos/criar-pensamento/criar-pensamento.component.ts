import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Pensamento } from './../pensamento';
import { PensamentoService } from './../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {



  formulario!: FormGroup;

  constructor(
      private readonly service: PensamentoService,
      private readonly router: Router,
      private readonly formBuilder: FormBuilder
      ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [''],
      autoria: [''],
      modelo: ['modelo1']
    })
  }

  criarPensamento(): void {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamentos']);
  }
}

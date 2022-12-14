import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    const noWhiteSpaceInBeggining = '^[^\s].+[^\s]$';
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(noWhiteSpaceInBeggining),
        Validators.minLength(5)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.pattern(noWhiteSpaceInBeggining),
        Validators.minLength(3)
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })

  }

  criarPensamento(): void {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamentos']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamentos']);
  }

  habilitarBotao(): string {
    return this.formulario.valid? 'botao' : 'botao__desabilitado';
  }
}

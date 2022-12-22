import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
      private readonly service: PensamentoService,
      private readonly router: Router,
      private readonly route: ActivatedRoute,
      private readonly formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    const noWhiteSpaceInBeggining = '^[^\s].+[^\s]$';
    this.formulario = this.formBuilder.group({
      id: ['', Validators.compose([
        Validators.required,
      ])],
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
      modelo: [''],
      favorito: false
    })

    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario.setValue(pensamento);
    })
  }

  editarPensamento(): void {
    if(this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamentos']);
      })
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamentos']);
  }

  habilitarBotao(): string {
    return this.formulario.valid? 'botao' : 'botao__desabilitado';
  }
}

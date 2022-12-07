import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
      private readonly service: PensamentoService,
      private readonly router: Router,
      private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })

  }

  editarPensamento(): void {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamentos']);
  }

}

import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[] | undefined;

  constructor() {
    this.nomePortal = 'https://loiane.training';

    var servico = new CursosService();
  }

  ngOnInit(): void {}
}

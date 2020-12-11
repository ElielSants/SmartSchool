import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  title = 'Professores';

  public professores = [
    {id: 1, nome: 'Thiago',   disciplina: 'Matemática' },
    {id: 2, nome: 'Antonio',  disciplina: 'Física' },
    {id: 3, nome: 'Leandra',  disciplina: 'Português' },
    {id: 4, nome: 'Fabricia', disciplina: 'Inglês' },
    {id: 5, nome: 'Neide'  , disciplina: 'Programação' },
    {id: 6, nome: 'Luzeide',  disciplina: 'Teatro' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

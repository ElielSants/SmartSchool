import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  public title = 'Alunos';

  public alunos = [
  { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 14587954},
  { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 15677847},
  { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 135786946},
  { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 855289657},
  { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 75728675},
  { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 782732737},
  { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 7287288717},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

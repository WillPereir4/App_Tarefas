import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefas';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor( private tarefaService: TarefaService, private router: Router) {

  }

createTarefa(tarefa: Tarefa){
  this.tarefaService.CreateTarefa(tarefa).subscribe((data) => {
    console.log('Tarefa criada com sucesso!', data);
    this.router.navigate(['/']);
  });
}



}


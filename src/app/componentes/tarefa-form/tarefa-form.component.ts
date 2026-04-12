import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Tarefa } from 'src/app/models/Tarefas';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Tarefa>();

  tarefaForm!: FormGroup;

  constructor( private tarefaService: TarefaService) { }
  
  ngOnInt(): void {

    this.tarefaForm = new FormGroup({
      id: new FormControl(0),
      titulo: new FormControl(''),
      descricao: new FormControl(''),
      status: new FormControl(''),
      dataDeCriacao: new FormControl(new Date)

    })

  
  submit(){
    this.onSubmit.emit(this.tarefaForm.value);

  }

}
}

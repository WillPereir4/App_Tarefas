import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Tarefa } from '../models/Tarefas';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = `${environment.ApiUrl}/Tarefa`

  constructor( private http: HttpClient){ }

  getTarefas() : Observable<Response<Tarefa[]>> {
    return this.http.get<Response<Tarefa[]>>(this.apiUrl);
  }

  CreateTarefa(tarefa: Tarefa) : Observable<Response<Tarefa>> {
    return this.http.post<Response<Tarefa>>(`${this.apiUrl}`, tarefa);
  }
}

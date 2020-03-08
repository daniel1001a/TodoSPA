import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../shared/models/Todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  Dataurl = 'http://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Todo[]> {
    return this.http.get(this.Dataurl).pipe( map(res => res as Todo[]));
  }

  public deleteuser(id: string) {
    return this.http.delete(this.Dataurl + '/' + id);
  }
}

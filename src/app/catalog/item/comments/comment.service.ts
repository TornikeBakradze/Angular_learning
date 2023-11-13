import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Comment} from "./comment";
import {environment} from "../../../../environments/environment";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.api}/comments`, {
      observe: 'body',
      headers: {
        // authorization: "S1Sasfasgf21gagag2as129dsjfsdjAasasfa#$FSAasaf"
      }
    })
      .pipe(tap(response => console.log(response)));
  }
}

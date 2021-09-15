import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/models/subject/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  private apiURL = 'http://localhost:8085/api';

  public getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiURL}/subject`);
  }

  public getSubject(subjectID: string): Observable<Subject> {
    return this.http.get<Subject>(`${this.apiURL}/subject/${subjectID}`);
  }

  public addSubject(subject: Subject): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/subject/add`, subject, {responseType: 'text' as 'json'});
  }

  public deleteSubject(subjectID: string): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}/subject/delete/${subjectID}`, {responseType: 'text' as 'json'});
  }
}

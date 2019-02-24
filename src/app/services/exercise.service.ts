import { Injectable } from "@angular/core";
// allows injection into a constructor or component
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Exercise } from "../models/Exercise";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
// is a simple class
export class ExerciseService {
  exercisesUrl: string = "https://jsonplaceholder.typicode.com/todos";

  limit10 = "?_limit=10";

  constructor(private http: HttpClient) {}

  // get exercises
  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.exercisesUrl}${this.limit10}`);
  }

  // delete exercise
  deleteExercise(exercise: Exercise): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${exercise.id}`;
    return this.http.delete<Exercise>(url, httpOptions);
  }

  // Add exercise
  addExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.exercisesUrl, exercise, httpOptions);
  }

  // toggle completed/ put request
  toggleCompleted(exercise: Exercise): Observable<any> {
    const url = `${this.exercisesUrl}/${exercise.id}`;
    return this.http.put(url, exercise, httpOptions);
  }
}

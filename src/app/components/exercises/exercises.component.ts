import { Component, OnInit } from "@angular/core";
import { Exercise } from "../../models/Exercise";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExercisesComponent implements OnInit {
  exercises: Exercise[];

  constructor() {}

  ngOnInit() {
    this.exercises = [
      {
        id: 1,
        title: "Exercise one",
        completed: false
      },
      {
        id: 2,
        title: "Exercise two",
        completed: true
      },
      {
        id: 3,
        title: "Exercise three",
        completed: false
      }
    ];
  }
}

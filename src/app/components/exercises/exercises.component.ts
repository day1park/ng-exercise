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

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";
import { Exercise } from "src/app/models/Exercise";

@Component({
  selector: "app-exercise-item",
  templateUrl: "./exercise-item.component.html",
  styleUrls: ["./exercise-item.component.css"]
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() {}

  ngOnInit() {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      exercise: true,
      "is-complete": this.exercise.completed
    };

    return classes;
  }

  onToggle(exercise) {
    exercise.completed = !exercise.completed;
  }

  onDelete(exercise) {
    console.log("delete");
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { ExerciseService } from "../../services/exercise.service";
import { Exercise } from "src/app/models/Exercise";

@Component({
  selector: "app-exercise-item",
  templateUrl: "./exercise-item.component.html",
  styleUrls: ["./exercise-item.component.css"]
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private exerciseService: ExerciseService) {}

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
    // Toggle in UI
    exercise.completed = !exercise.completed;
    // Toggle on server
    this.exerciseService
      .toggleCompleted(exercise)
      .subscribe(exercise => console.log(exercise));
  }

  onDelete(exercise) {
    console.log("delete");
  }
}

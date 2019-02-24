import { Component, OnInit } from "@angular/core";
import { ExerciseService } from "../../services/exercise.service";

import { Exercise } from "../../models/Exercise";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExercisesComponent implements OnInit {
  exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getExercises().subscribe(exercises => {
      this.exercises = exercises;
    });
    // subscribe as .then
  }

  deleteExercise(exercise: Exercise) {
    //remove from UI
    this.exercises = this.exercises.filter(i => i.id !== exercise.id);
    // remove from server
    this.exerciseService.deleteExercise(exercise).subscribe();
  }

  addExercise(exercise: Exercise) {
    this.exerciseService.addExercise(exercise).subscribe(exercise => {
      this.exercises.push(exercise);
    });
  }
}

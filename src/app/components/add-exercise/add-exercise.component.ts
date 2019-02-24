import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-exercise",
  templateUrl: "./add-exercise.component.html",
  styleUrls: ["./add-exercise.component.css"]
})
export class AddExerciseComponent implements OnInit {
  @Output() addExercise: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const exercise = {
      title: this.title,
      completed: false
    };

    this.addExercise.emit(exercise);
  }
}

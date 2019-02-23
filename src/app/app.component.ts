import { Component } from "@angular/core";

// decorater
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "angular GYM";
}

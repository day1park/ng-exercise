import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExercisesComponent } from "./components/exercises/exercises.component";
import { ExerciseItemComponent } from "./components/exercise-item/exercise-item.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddExerciseComponent } from "./components/add-exercise/add-exercise.component";
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    ExerciseItemComponent,
    HeaderComponent,
    AddExerciseComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ExerciseItemComponent } from './components/exercise-item/exercise-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    ExerciseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

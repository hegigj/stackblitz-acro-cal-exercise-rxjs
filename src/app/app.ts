import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ExerciseService} from './core/services/exercise.service';

@Component({
  selector: 'root',
  imports: [RouterOutlet],
  template: `
    <header class="p-4 font-bold text-lg text-slate-500">
      <h1>ACRO Cal Exercise</h1>
    </header>
    <main>
      <router-outlet/>
    </main>
  `,
})
export class App implements OnInit {
  private readonly exerciseService = inject(ExerciseService);

  ngOnInit(): void {
    this.exerciseService.loadExercises();
  }
}

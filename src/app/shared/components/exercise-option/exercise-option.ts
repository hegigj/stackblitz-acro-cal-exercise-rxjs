import {Component, computed, input, output} from '@angular/core';
import {IExerciseOption} from '../../../core/interfaces/exercise-option.interface';

@Component({
  selector: 'exercise-option',
  imports: [],
  templateUrl: './exercise-option.html',
  host: {
    'class': 'cursor-pointer hover:bg-slate-100 h[150px] w-[250px] p-2',
    '[class.bg-green-300]': 'isSelected()',
    '(click)': 'selectExercise.emit(exercise())'
  },
})
export class ExerciseOption {
  public exercise = input.required<IExerciseOption>();
  public selectedExercise = input<string | null>();
  public selectExercise = output<IExerciseOption>();

  public isSelected = computed(() => this.selectedExercise() === this.exercise().exercise)
}

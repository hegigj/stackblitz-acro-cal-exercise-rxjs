import {ChangeDetectionStrategy, Component, computed, input, output} from '@angular/core';
import {IExerciseOption} from '../../../core/interfaces/exercise-option.interface';
import {IExercise} from "../../../core/interfaces/exercise.interface";

@Component({
  selector: 'exercise-option',
  imports: [],
  templateUrl: './exercise-option.html',
  host: {
    'class': 'cursor-pointer hover:bg-slate-100 h[150px] w-[250px] p-2',
    '[class.bg-green-300]': 'isSelected()',
    '(click)': 'selectExercise.emit(exercise())'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseOption {
  public exercise = input.required<IExerciseOption>();
  public selectedExercise = input<IExercise | null>();
  public selectExercise = output<IExerciseOption>();

  public isSelected = computed(() => this.selectedExercise()?.exercise === this.exercise().exercise)
}

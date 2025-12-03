import {ChangeDetectionStrategy, Component, computed, input, output} from '@angular/core';
import {IExercise} from '../../../core/interfaces/exercise.interface';

@Component({
  selector: 'exercise-box',
  imports: [],
  templateUrl: './exercise-box.html',
  host: {
    'class': 'cursor-pointer flex flex-col justify-between hover:bg-slate-100 h-[150px] w-[150px] p-2',
    '[class.bg-green-300]': 'isSelected()',
    '(click)': 'selectExercise.emit(exercise())'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseBox {
  public exercise = input.required<IExercise>();
  public selectedIndex = input<number | null>();
  public selectExercise = output<IExercise>();

  public isSelected = computed(() => this.selectedIndex() === this.exercise().index)
}

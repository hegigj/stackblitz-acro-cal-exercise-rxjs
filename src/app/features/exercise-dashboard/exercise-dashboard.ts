import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ExerciseBox} from '../../shared/components/exercise-box/exercise-box';
import {ExerciseOptions} from '../exercise-options/exercise-options';
import {ExerciseService} from '../../core/services/exercise.service';
import {AsyncPipe} from '@angular/common';
import {ReducePipe} from '../../core/pipes/reduce.pipe';

@Component({
  selector: 'exercise-dashboard',
  imports: [
    ExerciseBox,
    ExerciseOptions,
    AsyncPipe,
    ReducePipe
  ],
  templateUrl: './exercise-dashboard.html',
  host: {
    'class': 'divide-y-5 divide-solid divide-slate-100'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseDashboard {
  public readonly exerciseService = inject(ExerciseService);
}

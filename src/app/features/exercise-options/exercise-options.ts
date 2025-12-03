import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {IExerciseOption} from '../../core/interfaces/exercise-option.interface';
import {ExerciseOption} from '../../shared/components/exercise-option/exercise-option';
import {ExerciseService} from '../../core/services/exercise.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'exercise-options',
  imports: [
    ExerciseOption,
    AsyncPipe
  ],
  templateUrl: './exercise-options.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseOptions {
  public readonly exerciseService = inject(ExerciseService);

  public readonly setsOptions = signal<IExerciseOption[]>([
    {
      exercise: 'Easy Bench-Press',
      sets: 3,
      reps: 10,
      weight: 30,
      burnedCalories: 130
    },
    {
      exercise: 'Medium Bench-Press',
      sets: 3,
      reps: 12,
      weight: 50,
      burnedCalories: 210
    },
    {
      exercise: 'Hard Bench-Press',
      sets: 3,
      reps: 16,
      weight: 50,
      burnedCalories: 350
    }
  ]);

  public readonly runningOptions = signal<IExerciseOption[]>([
    {
      exercise: 'Easy Treadmill',
      distance: 1000,
      burnedCalories: 130
    },
    {
      exercise: 'Medium Treadmill',
      distance: 5000,
      burnedCalories: 450
    },
    {
      exercise: 'Hard Treadmill',
      distance: 10000,
      burnedCalories: 780
    },
    {
      exercise: 'Easy Time Treadmill',
      duration: 30,
      burnedCalories: 130
    },
    {
      exercise: 'Medium Time Treadmill',
      duration: 60,
      burnedCalories: 450
    },
    {
      exercise: 'Hard Time Treadmill',
      duration: 90,
      burnedCalories: 780
    }
  ]);
}

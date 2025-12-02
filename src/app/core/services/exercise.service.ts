import {inject, Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {IExercise} from '../interfaces/exercise.interface';
import {storageConfig} from '../configs/storage.config';
import {IExerciseOption} from '../interfaces/exercise-option.interface';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private readonly storage: StorageService = inject(StorageService);

  private readonly exercises$: BehaviorSubject<IExercise[]> = new BehaviorSubject<IExercise[]>(this.initEmptyExercises());
  private readonly selectedExercise$: BehaviorSubject<IExercise | null> = new BehaviorSubject<IExercise | null>(null);
  private readonly selectedExerciseIndex$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  public exercises(): Observable<IExercise[]> {
    return this.exercises$.asObservable();
  };

  public selectedExercise(): Observable<IExercise | null> {
    return this.selectedExercise$.asObservable();
  };

  public selectedExerciseIndex(): Observable<number | null> {
    return this.selectedExerciseIndex$.asObservable();
  };

  public loadExercises(): void {
    const exercises = this.storage.getObjectStore<IExercise[]>(storageConfig.selectedExercise);

    if (exercises) {
      this.exercises$.next(exercises);
    }
  }

  public selectExercise(index: number | null): void {
    this.selectedExerciseIndex$.next(index);

    if (index !== null) {
      const exercise = this.exercises$
        .getValue()
        .find((_, i) => i === index) as IExercise;

      this.selectedExercise$.next(exercise);
    }
  }

  public addExercise(exerciseOption: IExerciseOption): void {
    let selectedExerciseIndex = this.selectedExerciseIndex$.getValue();
    const exercises = this.exercises$
      .getValue()
      .map((exercise, index) => {
        if (index === selectedExerciseIndex) {
          return {
            index,
            ...exerciseOption
          };
        }

        return exercise;
      });

    this.exercises$.next(exercises);

    if (selectedExerciseIndex !== null && selectedExerciseIndex < exercises.length - 1) {
      selectedExerciseIndex = selectedExerciseIndex + 1;
    }

    this.selectedExercise$.next(
      exercises.find((_, index) => index === selectedExerciseIndex) || null
    );
    this.selectedExerciseIndex$.next(selectedExerciseIndex);

    this.storage.store(storageConfig.selectedExercise, exercises);
  }

  public clearExercises(): void {
    const exercises = this.initEmptyExercises();

    this.exercises$.next(exercises);
    this.selectedExercise$.next(null);
    this.selectedExerciseIndex$.next(null);

    this.storage.clearStore(storageConfig.selectedExercise);
  }

  private initEmptyExercises(): IExercise[] {
    return new Array(10)
      .fill(0)
      .map((_, index) => ({
        index,
        exercise: '',
        burnedCalories: 0
      }));
  }
}

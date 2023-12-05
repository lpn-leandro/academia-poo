import DaoExercise from "../dao/DaoExercise";
import Exercise from "../model/Exercise";

export default class ExerciseCtrl {
  private daoExercise: DaoExercise = new DaoExercise();

  public getNewExercise(name: string, weight: number, sequence: number, series: number): Exercise {
    return new Exercise(name, weight, sequence, series);
  }

  public saveExercise(exercise: Exercise): void {
    this.daoExercise.addExercise(exercise);
  }

  public listAllExercises(): string{
    return this.daoExercise.listAllExercises();
  } 

  public findExerciseByName(exercise: string): Exercise | undefined{
    return this.daoExercise.findExerciseByName(exercise);
  }

  public findExerciseById(exerciseId: number): Exercise | undefined {
    return this.daoExercise.findExerciseById(exerciseId);
  }
}

import DaoExercise from "../dao/DaoExercise";
import Exercise from "../model/Exercise";

export default class ExerciseCtrl {
  private daoExercise: DaoExercise = new DaoExercise();

  public getNewExercise(name: string, weigth: number, sequence: number): Exercise {
    return new Exercise(name, weigth, sequence);
  }

  public saveExercise(exercise: Exercise): void {
    this.daoExercise.addExercise(exercise);
  }

  public listAllExercises(): string{
    return this.daoExercise.listAllExercises();
  } 
}

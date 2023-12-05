import Exercise from '../model/Exercise';

export default class DaoExercise {
  private exercises: Exercise[] = [];

  public addExercise(exercise: Exercise) {
    this.exercises.push(exercise);
  }

  public findExerciseByName(name: string) {
    return this.exercises.find((exercises) => exercises.getName() === name);
  }

  //retornar relatorio de passageiros
  public listAllExercises(): string {
    let listOfExercises: string = '';

    for (const element of this.exercises) {
      listOfExercises += `###########|Exercicios|###########
        # ID:  ${element.getId()}
        # Nome: ${element.getName()}
        # Peso: ${element.getWeight()}
        # Repetições: ${element.getSequence()}
        # Séries: ${element.getSeries()}
        #################################\n`;
    }
    return listOfExercises;
  }
  
  public findExerciseById(exerciseId: number): Exercise | undefined {
    return this.exercises.find(exercise => exercise.getId() === exerciseId);
  }

}

import Exercise from "../model/Exercise";

export default class DaoExercise {
  private exercise: Exercise[] = [];

  public addExercise(exercise: Exercise) {
    this.exercise.push(exercise);
  }

  //retornar relatorio de passageiros
  public listAllExercises(): string {
    let listOfExercises: string = "";

    for (let index = 0; index < this.exercise.length; index++) {
      const element = this.exercise[index];
      listOfExercises =
        listOfExercises +
        "----------------------------\nNome: " +
        element.getName() +
        "\nPeso: " +
        element.getSequence() +
        "\nRepetições: " +
        element.getSequence() +
        "\n-----------------------------\n";
    }
    listOfExercises = listOfExercises;
    return listOfExercises;
  }
}

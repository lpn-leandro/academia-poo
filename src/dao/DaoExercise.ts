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
        "###########|Exercicios|###########\n# Nome: " +
        element.getName() +
        "\n# Peso: " +
        element.getSequence() +
        "\n# Repetições: " +
        element.getSequence() +
        "\n#################################\n";
    }
    listOfExercises = listOfExercises;
    return listOfExercises;
  }
}

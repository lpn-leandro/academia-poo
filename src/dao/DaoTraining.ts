import Training from "../model/Training";

export default class DaoTraining {
  private Training: Training[] = [];

  public addTraining(Training: Training) {
    this.Training.push(Training);
  }

  //retornar relatorio de passageiros
  public listAllTrainings(): string {
    let listOfTrainings: string = "";

    for (let index = 0; index < this.Training.length; index++) {
      const element = this.Training[index];
      listOfTrainings =
        listOfTrainings +
        "\n---------------------------\nNome: " +
        element.getName() +
        "\nDescrição: " +
        element.getDescription() +
        "\nExercicios: " +
        element.getExercisesName() +
        "\n---------------------------";
    }
    listOfTrainings = listOfTrainings;
    return listOfTrainings;
  }
}

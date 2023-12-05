import Training from '../model/Training';

export default class DaoTraining {
  private trainings: Training[] = [];

  public addTraining(training: Training) {
    this.trainings.push(training);
  }

  //retornar relatorio de passageiros
  public listAllTrainings(): string {
    let listOfTrainings: string = '';

    for (const training of this.trainings) {
      listOfTrainings += `###########|Treinos|###########
      # ID: ${training.getId()}
      # Nome: ${training.getName()}
      # Descrição: ${training.getDescription()}
      # Exercicios: ${training.getExercisesName()}
      ###############################\n`;
    }
    return listOfTrainings;
  }

  public findTrainingById(trainingId: number): Training | undefined {
    return this.trainings.find(training => training.getId() === trainingId);
  }
  
}

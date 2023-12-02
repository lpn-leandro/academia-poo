import DaoTraining from "../dao/DaoTraining";
import Training from "../model/Training";

export default class TrainingCtrl {
  private daoTraining: DaoTraining = new DaoTraining();

  public getNewTraining(name: string, description: string): Training {
    return new Training(name, description);
  }

  public saveTraining(training: Training): void {
    this.daoTraining.addTraining(training);
  }

  public listAllTrainings(): string{
    return this.daoTraining.listAllTrainings();
  } 
}

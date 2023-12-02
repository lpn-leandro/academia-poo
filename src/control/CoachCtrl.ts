import DaoCoach from "../dao/DaoCoach";
import Coach from "../model/Coach";

export default class CoachCtrl {
  private daoCoach: DaoCoach = new DaoCoach();

  public getNewCoach(name: string, email: string, cellphone: number): Coach {
    return new Coach(name, email, cellphone);
  }

  public saveCoach(coach: Coach): void {
    this.daoCoach.addCoach(coach);
  }

  public listAllCoachs(): string{
    return this.daoCoach.listAllCoachs();
  } 
}

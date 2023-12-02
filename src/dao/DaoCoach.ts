import Coach from "../model/Coach";

export default class DaoCoach {
  private coach: Coach[] = [];

  public addCoach(coach: Coach) {
    this.coach.push(coach);
  }

  //retornar relatorio de passageiros
  public listAllCoachs(): string {
    let listOfCoachs: string = "";

    for (let index = 0; index < this.coach.length; index++) {
      const element = this.coach[index];
      listOfCoachs =
        listOfCoachs +
        "---------------------\nNome: " +
        element.getName() +
        "\nEmail: " +
        element.getEmail() +
        "\nTelefone: " +
        element.getCellphone() +
        "\n-------------------------------" +
        "\n";
    }
    listOfCoachs = listOfCoachs;
    return listOfCoachs;
  }
}

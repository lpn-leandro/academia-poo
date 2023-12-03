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
        "###########|Treinadores|###########\n# Nome: " +
        element.getName() +
        "\n# Email: " +
        element.getEmail() +
        "\n# Telefone: " +
        element.getCellphone() +
        "\n#################################\n" +
        "\n";
    }
    listOfCoachs = listOfCoachs;
    return listOfCoachs;
  }
}

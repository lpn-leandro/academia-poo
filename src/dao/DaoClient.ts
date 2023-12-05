import Client from "../model/Client";
import GenericDao from "./GenericDao";

export default class DaoClient extends GenericDao<Client>{
  private client: Client[] = [];

  public add(client: Client) {
    this.client.push(client);
  }

  //retornar relatorio de passageiros
  public listAllClients(): string {
    let listOfClients: string = "";

    for (let index = 0; index < this.client.length; index++) {
      const element = this.client[index];
      listOfClients =
        listOfClients +
        "###########|Clientes|###########" +
        "\n# ID: " + element.getId() +
        "\n# Nome: " + element.getName() +
        "\n# Email:  " +
        element.getEmail() +
        "\n# Telefone: " +
        element.getCellphone() +
        "\n# Matricula: " +
        element.getEnrollment() +
        "\n###############################\n";
    }
    listOfClients = listOfClients;
    return listOfClients;
  }

  public getItemDetails(client: Client): string {
    return `
      ID: ${client.getId()}
      Nome: ${client.getName()}
      Email: ${client.getEmail()}
      Telefone: ${client.getCellphone()}
      Matrícula: ${client.getEnrollment()}
    `;
  }

}

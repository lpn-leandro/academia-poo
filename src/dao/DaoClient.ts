import Client from "../model/Client";

export default class DaoClient {
  private client: Client[] = [];

  public addClient(client: Client) {
    this.client.push(client);
  }

  //retornar relatorio de passageiros
  public listAllClients(): string {
    let listOfClients: string = "";

    for (let index = 0; index < this.client.length; index++) {
      const element = this.client[index];
      listOfClients =
        listOfClients +
        "-------------------------------\nNome: " +
        element.getName() +
        "\nEmail:  " +
        element.getEmail() +
        "\nTelefone: " +
        element.getCellphone() +
        "\nMatricula: " +
        element.getEnrollment() +
        "\n--------------------------------\n";
    }
    listOfClients = listOfClients;
    return listOfClients;
  }
}

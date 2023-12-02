import DaoClient from "../dao/DaoClient";
import Client from "../model/Client";

export default class ClientCtrl {
  private daoClient: DaoClient = new DaoClient();

  public getNewClient(name: string, email: string, cellphone: number, enrollment: number): Client {
    return new Client(name, email, cellphone, enrollment);
  }

  public saveClient(client: Client): void {
    this.daoClient.addClient(client);
  }

  public listAllClients(): string{
    return this.daoClient.listAllClients();
  } 
}

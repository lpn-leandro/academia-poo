import DaoClient from "../dao/DaoClient";
import GenericDao from "../dao/GenericDao";
import Client from "../model/Client";

export default class ClientCtrl {
  private daoClient: DaoClient = new DaoClient();
  private genericDao: GenericDao<Client> = new GenericDao();

  public getNewClient(name: string, email: string, cellphone: number, enrollment: number): Client {
    return new Client(name, email, cellphone, enrollment);
  }

  public saveClient(client: Client): void {
    this.daoClient.add(client);
  }

  public listAllClients(): string{
    return this.daoClient.listAllClients();
  } 
}

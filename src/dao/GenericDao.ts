import Client from "../model/Client";
import Coach from "../model/Coach";
import Dao from "./Dao";

export default class GenericDao<T> {
  //private value: T;
  private dao: Dao = new Dao();

  constructor() {
    //this.value = value;
  }

  public add(value: T) {
  
    if (value instanceof Client) {
      console.log("adicionando um Cliente");
      this.dao.addClient(value);
    }
    if (value instanceof Coach) {
      console.log("adicionando um Coach");
      this.dao.addCoach(value);
    }
    this.dao.print();
  }

}

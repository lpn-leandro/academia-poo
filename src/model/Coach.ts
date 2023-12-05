import Client from "./Client"
import Person from "./Person"

export default class Coach extends Person{
    private clients: Client[] = [];

    constructor(name: string, email: string, cellphone: number){
        super(name, email, cellphone);
    }

    public getName() {
        return super.getName() + `ID: ${super.getId()}`;
    }

    public addClients(client: Client){
        this.clients.push(client);
    }

    // public getClientsName(){
    //     for (let i = 0; i < this.clients.length; i++) {
    //         const clients = this.clients[i];
    //         console.log('Nome: ' + clients.getName());
    //     }
    // } 
    public userType(): number {
        return Users.Coach;
    }

}
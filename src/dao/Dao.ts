import Client from "../model/Client";
import Coach from "../model/Coach";

export default class Dao{
 
    private client: Client[] = [];
    private coach: Coach[] = [];  

    public addClient(client: Client){
        this.client.push(client);
    }

    public addCoach(coach: Coach){
        this.coach.push(coach);
    }
    public print(){
        for (let i = 0; i < this.coach.length; i++) {
            const element = this.coach[i];
           console.log(element.getName())
            
        }
        for (let i = 0; i < this.client.length; i++) {
            const element = this.client[i];
            console.log(element.getName())
            
        }
    }



}
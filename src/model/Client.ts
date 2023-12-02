import Person from "./Person";


export default class Client extends Person{
    private enrollment!: number;

    constructor(name: string, email: string, cellphone: number, enrollment: number){
        super(name,email,cellphone);
        this.setEnrollment(enrollment);
    }

    public getEnrollment(): number{
        return this.enrollment;
    }
    public setEnrollment(enrollment: number){
        this.enrollment = enrollment;
    }

    public userType(): number {
        return Users.Client;
    }
}
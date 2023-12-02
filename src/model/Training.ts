import Exercise from "./Exercise";

export default class Training{
    private name: string = "";
    private description: string = "";
    private exercises: Exercise[] = [];

    constructor(name: string, description: string){
        this.setName(name);
        this.setDescription(description);
    }

    public setName(name: string): void{
        name.trim();
        this.name = name;
    }
    public getName(): string{
        return this.name;
    }

    public setDescription(description: string): void{
        description.trim();
        this.description = description;
    }
    public getDescription(): string{
        return this.description;
    }

    public addExercises(exercise: Exercise) {
        this.exercises.push(exercise);
    }
    public getExercisesName(){
        for (let index = 0; index < this.exercises.length; index++) {
            const exercises = this.exercises[index];
            console.log('Nome: ' + exercises.getName());
        }
    }
}
import Exercise from './Exercise';

export default class Training {
  private id!: number;
  private name: string = '';
  private description?: string = '';
  private exercises: Exercise[];

  constructor(name: string, description?: string, exercises: Exercise[] = []){
    this.id = Math.floor(Math.random() * 100);
    this.setName(name);
    this.description = description;
    this.exercises = Array.isArray(exercises) ? exercises : [exercises];
    
  }

  public getId(): number {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name.trim();
  }
  public getName(): string {
    return this.name;
  }

  public setDescription(description: string): void {
    this.description = description.trim();;
  }
  public getDescription(): string | undefined {
    return this.description;
  }

  public addExercises(exercise: Exercise): void {
    this.exercises.push(exercise);
  }
  public getExercisesName() {
    let exercisesNames: string = '';
    for (let index = 0; index < this.exercises.length; index++) {
      const exercises = this.exercises[index];
      exercisesNames += exercises.getName() + '\n';
    }
    return exercisesNames;
  }
}

export default class Exercise {
  private name: string = '';
  private weight: number = 0;
  private sequence: number = 0;

  constructor(name: string, weight: number, sequence: number) {
    this.setName(name);
    this.setWeight(weight);
    this.setSequence(sequence);
  }

  public setName(name: string) {
    name.trim();
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }

  public setWeight(weight: number) {
    this.weight = weight;
  }
  public getWeight(): number {
    return this.weight;
  }

  public setSequence(sequence: number) {
    this.sequence = sequence;
  }
  public getSequence(): number {
    return this.sequence;
  }
}

export default class Exercise {
  private id: number;
  private name: string = '';
  private weight: number = 0;
  private sequence: number = 0;
  private series: number = 0;

  constructor(name: string, weight: number, sequence: number, series: number) {
    this.id = Math.floor(Math.random() * 100);
    this.setName(name);
    this.setWeight(weight);
    this.setSequence(sequence);
    this.setSeries(series);
  }

  public getId(): number{
    return this.id;
  }

  public setName(name: string) {
    this.name = name.trim();
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
  
  public setSeries(series: number) {
    this.series = series;
  }
  public getSeries(): number {
    return this.series;
  }
}

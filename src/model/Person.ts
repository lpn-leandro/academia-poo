export default abstract class Person {
  private id!: number;
  private name!: string;
  private email!: string;
  private cellphone!: number;

  constructor(
    name: string,
    email: string,
    cellphone: number
  ) {
    this.id = Math.floor(Math.random() * 100);
    this.setName(name);
    this.setEmail(email);
    this.setCellphone(cellphone);
  }

  public getId(): number{
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }

  public setEmail(email: string) {
    email.trim();
    this.email = email;
  }
  public getEmail() {
    return this.email;
  }

  public setCellphone(cellphone: number) {
    if(cellphone.toString.length < 11){
      this.cellphone = cellphone;
    }
  }
  public getCellphone() {
    return this.cellphone;
  }

  public abstract userType(): number;
}

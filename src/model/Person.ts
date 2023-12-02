export default abstract class Person {
  private name!: string;
  private email!: string;
  private cellphone!: number;

  constructor(
    name: string,
    email: string,
    cellphone: number
  ) {
    this.setName(name);
    this.setEmail(email);
    this.setCellphone(cellphone);
  }

  public setName(name: string) {
    name.trim();
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

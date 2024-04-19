export class Animal {
  public id: number;
  public name: string;
  public countLegs: number;

  constructor(id: number, name: string, countLegs: number = 2) {
    this.id = id;
    this.name = name;
    this.countLegs = countLegs;
  }

  info() {
    console.log(`Name: ${this.name} has ${this.countLegs} legs.`);
  }
}

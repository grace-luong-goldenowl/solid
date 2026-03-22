import { Employee } from "./Employee";

export class FreeLancerEmployee extends Employee {
  workTime: number;

  constructor(name: string, workTime: number) {
    super(name);
    this.workTime = workTime;
  }

  calculateSalary(): number {
    return this.workTime * 40;
  }
}
import { Shape } from "./Shape";

export class Triangle extends Shape {
  length: number;

  constructor(length: number) {
    super();
    this.length = length;
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}
import { Shape } from "./Shape";

export class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}
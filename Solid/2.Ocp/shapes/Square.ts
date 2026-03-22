import { Shape } from "./Shape";

export class Square extends Shape {
  edge: number;

  constructor(edge: number) {
    super();
    this.edge = edge;
  }

  calculateArea(): number {
    return this.edge * this.edge;
  }
}
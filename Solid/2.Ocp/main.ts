import { Shape } from "./shapes/Shape";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Triangle } from "./shapes/Triangle";
import { Square } from "./shapes/Square";

import { FullTimeEmployee } from "./employees/FullTimeEmployee";
import { PartTimeEmployee } from "./employees/PartTimeEmployee";
import { InternEmployee } from "./employees/InternEmployee";
import { FreeLancerEmployee } from "./employees/FreeLancerEmployee";

/*=========== START PRACTICE 1 ===============*/
let shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 5),
  new Triangle(3),
  new Square(4),
];
const shapesInstance = new (class extends Shape {
  shapes: Shape[];
  constructor(shapes: Shape[]) {
    super();
    this.shapes = shapes;
  }

  calculateArea(): number {
    let total = 0;
    this.shapes.forEach((shape) => {
      total += shape.calculateArea();
    });
    return total;
  }
})(shapes);
console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`,
);

const partTimeEmployee = new PartTimeEmployee("Eve");
console.log(
  `${partTimeEmployee.name}'s salary is ${partTimeEmployee.calculateSalary()}`,
);

const internEmployee = new InternEmployee("Bob");
console.log(
  `${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`,
);

const freeLancerEmployee = new FreeLancerEmployee("Cyan", 100);
console.log(
  `${freeLancerEmployee.name}'s salary is ${freeLancerEmployee.calculateSalary()}`,
);
/*=========== END PRACTICE 2 ===============*/
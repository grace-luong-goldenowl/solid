/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
// class Shape {
//   shapes: Shape[];
//   constructor(shapes: Shape[]) {
//     this.shapes = shapes;
//   }

//   calculateArea(): number {
//     let total = 0;
//     this.shapes.forEach((shape) => {
//       total += shape.calculateArea();
//     });
//     return total;
//   }
// }

// class Circle extends Shape {
//   radius: number;
//   constructor(radius: number) {
//     super([]);
//     this.radius = radius;
//   }

//   calculateArea(): number {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;
//   constructor(height: number, width: number) {
//     super([]);
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea(): number {
//     return this.height * this.width;
//   }
// }
// class Triangle extends Shape {
//   length: number;
//   constructor(length: number) {
//     super([]);
//     this.length = length;
//   }

//   calculateArea(): number {
//     return 0.5 * this.length * this.length;
//   }
// }

// class Square extends Shape {
//   edge: number;
//   constructor(edge: number) {
//     super([]);
//     this.edge = edge;
//   }

//   calculateArea(): number {
//     return this.edge * this.edge;
//   }
// }

// let shapes: Shape[] = [
//   new Circle(5),
//   new Rectangle(4, 5),
//   new Triangle(3),
//   new Square(4),
// ];
// const shapesInstance = new Shape(shapes);
// console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
enum EmployeeType {
  FullTime,
  PartTime,
  Intern,
}

class Employee {
  constructor(public name: string) {}

  calculateSalary(): number {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 5000;
  }
}

class PartTimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }
  calculateSalary(): number {
    return 3000;
  }
}

class InternEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }
  calculateSalary(): number {
    return 1000;
  }
}

class FreeLancerEmployee extends Employee {
  workTime: number;

  constructor(name: string, workTime: number) {
    super(name);
    this.workTime = workTime;
  }

  calculateSalary(): number {
    return this.workTime * 40;
  }
}

const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`,
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

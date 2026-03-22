import { Shape, Circle, Rectangle, Square, Triangle } from "../../Solid/2.Ocp/shapes";
import { FullTimeEmployee, PartTimeEmployee, InternEmployee, FreeLancerEmployee } from "../../Solid/2.Ocp/employees";

describe("Shapes", () => {
    test("should calculate the area of a circle", () => {
        const circle = new Circle(5);
        expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
    });

    test("should calculate the area of a rectangle", () => {
        const rectangle = new Rectangle(4, 5);
        expect(rectangle.calculateArea()).toBe(20);
    });

    test("should calculate the area of a square", () => {
        const square = new Square(4);
        expect(square.calculateArea()).toBe(16);
    });

    test("should calculate the area of a triangle", () => {
        const triangle = new Triangle(3);
        expect(triangle.calculateArea()).toBeCloseTo(4.5, 2);
    });
});

describe("Shapes Area Calculation", () => {
    test("should calculate the total area of multiple shapes", () => {
        const shapes: Shape[] = [
            new Circle(5),
            new Rectangle(4, 5),
            new Triangle(3),
            new Square(4),
        ];
        const totalArea = shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0);
        expect(totalArea).toBeCloseTo(119.04, 2);
    });
});

describe("Employees", () => {
    test("should calculate the salary of a full-time employee", () => {
        const fullTimeEmployee = new FullTimeEmployee("Alice");
        expect(fullTimeEmployee.calculateSalary()).toBe(5000);
    });

    test("should calculate the salary of a part-time employee", () => {
        const partTimeEmployee = new PartTimeEmployee("Eve");
        expect(partTimeEmployee.calculateSalary()).toBe(3000);
    });

    test("should calculate the salary of an intern employee", () => {
        const internEmployee = new InternEmployee("Bob");
        expect(internEmployee.calculateSalary()).toBe(1000);
    });

    test("should calculate the salary of a freelancer employee", () => {
        const freeLancerEmployee = new FreeLancerEmployee("Cyan", 100);
        expect(freeLancerEmployee.calculateSalary()).toBe(4000);
    });
});

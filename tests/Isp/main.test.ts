import { OldFashionedPrinter } from "../../Solid/4.Isp/devices/OldFashionedPrinter";
import { ModernPrinter } from "../../Solid/4.Isp/devices/ModernPrinter";

describe("OldFashionedPrinter", () => {
  test("should print a document", () => {
    const printer = new OldFashionedPrinter();
    const consoleSpy = jest.spyOn(console, "log");

    printer.print("Test Document");

    expect(consoleSpy).toHaveBeenCalledWith("Printing document: Test Document");

    consoleSpy.mockRestore();
  });
});

describe("ModernPrinter", () => {
  test("should print a document", () => {
    const printer = new ModernPrinter();
    const consoleSpy = jest.spyOn(console, "log");

    printer.print("Test Document");

    expect(consoleSpy).toHaveBeenCalledWith("Printing document: Test Document");

    consoleSpy.mockRestore();
  });

  test("should scan a document", () => {
    const scanner = new ModernPrinter();
    const consoleSpy = jest.spyOn(console, "log");

    scanner.scan("Test Document");

    expect(consoleSpy).toHaveBeenCalledWith("Scanning document: Test Document");

    consoleSpy.mockRestore();
  });

  test("should fax a document", () => {
    const faxMachine = new ModernPrinter();
    const consoleSpy = jest.spyOn(console, "log");

    faxMachine.fax("Test Document");

    expect(consoleSpy).toHaveBeenCalledWith("Fax document: Test Document");

    consoleSpy.mockRestore();
  });
});

/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface FaxMachine {
  fax(document: string): void;
}

class OldFashionedPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}

class ModernPrinter implements Printer, Scanner, FaxMachine {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }
  fax(document: string): void {
    console.log(`Fax document: ${document}`);
  }
}

const printer = new OldFashionedPrinter();
const newPrinter = new ModernPrinter();
printer.print("Document 1");

newPrinter.scan("Document 2");
newPrinter.fax("Document 3");

import { Printer } from "./Printer";
import { Scanner } from "./Scanner";
import { FaxMachine } from "./FaxMachine";

export class ModernPrinter implements Printer, Scanner, FaxMachine {
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
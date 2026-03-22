import { Printer } from "./Printer";

export class OldFashionedPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
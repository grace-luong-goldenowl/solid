import { OldFashionedPrinter, ModernPrinter } from "./devices";

const printer = new OldFashionedPrinter();
const newPrinter = new ModernPrinter();

printer.print("Document 1");

newPrinter.scan("Document 2");
newPrinter.fax("Document 3");

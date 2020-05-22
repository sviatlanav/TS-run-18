import { ReferenceItem } from "./referenceitem" ;

export default class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
      super(title, year);
    }
  
    printItem(): void{
      super.printItem();
      console.log(`Edition ${this.edition}  in year ${this.year}`);
    }
  
    printCitation(): void {
      console.log(`title ${this.title} -year ${this.year}`);
    }
  }
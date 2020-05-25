import { ReferenceItem } from "./referenceitem" ;
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number{
      return this._copies;
    }

    set copies(value: number) {
      this._copies = value;
    }

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
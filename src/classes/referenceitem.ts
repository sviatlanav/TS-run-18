import * as  Interfaces from  '../interfaces';

  // Task 05.01
  export abstract class ReferenceItem{
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number){
    //   console.log('creating new ReferenceItem ');
    //   this.title = newTitle;
    //   this.year = newYear;
    // }

    static department: string = 'Research';

    private _publisher: string;

    get publisher(): string {
      return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
      this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number){
       console.log('creating new ReferenceItem ');
    }

    printItem(): void{
      console.log(`title ${this.title} was published in year ${this.year}`);
      console.log(ReferenceItem.department);
    }

    abstract printCitation(): void;
  }



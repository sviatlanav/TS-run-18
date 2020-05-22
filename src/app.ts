showHello('greeting', 'Lovely Typescript!');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// start enum
enum Category { JavaScript, CSS, HTML, TypeScript, Angular, Software }

// end enum

// start interfaces

interface Book {
  id: number,
  title: string,
  author: string,
  available: boolean,
  category: Category,
  pages?: number,
  markDamaged?: DamageLogger, //(reason: string) => void
}

interface DamageLogger{
  (reason: string): void;
}

interface Person{
  name: string,
  email: string,
}

interface Author extends Person {
  numBooksPublished: number,
}

interface Librarian extends Person{
  department: string,
  assistCustomer: (customer: string) => void,
}

interface Magazine {
  title: string,
  publisher: string,
}

interface ShelfItem{
  title: string;
}

class Shelf<T extends ShelfItem> {
  private _items: Array<T> = [];

  add(item: T): void {
    this._items.push(item);
  }

  getFirst(): T {
    return this._items[0];
  }

  find(title: string): T {
    return this._items.find(item => item.title === title);
  }

  printTitles(): void{
    this._items.forEach(item => console.log(item.title));
  }
}

// end interfaces

// start type 

type BookProperties = keyof Book;

type BookRequiredFields = Required<Book>;
type UpdateBook = Partial<Book>;

type AuthorWhoEmail = Omit<Author, 'email'>;

type CreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;
// end type 

//decorators

function sealed(param: string){
  return function(target: Function): void{
    console.log('Sealing the constructor ${param}');
    Object.seal(target);
    Object.seal(target.prototype);
  }
}

function logger<TFunction extends Function>(target: TFunction): TFunction{
  const newConstructor: Function = function () {
    console.log('Creating new instance');
    console.log(target);

    this.age = 30;
  }
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function () {
    console.log(`Librarian ${this.name}`);    
  }

  return newConstructor as TFunction;
}

function writable(isWritable: boolean) {
  return function(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(target.methodName);
    console.log(target);
    descriptor.value = isWritable;
    return descriptor;
  }
}

//decorators

// start run

// const universityLibrarian = new UniversityLibrarian()



const offer: any = {
  book: {
    title: 'Essential TypeScript'
  }
}

console.log(offer.magazine?.title);


const favoriteAuthor: Author = {
  email: 'favoriteAuthorEmail',
  name: 'favoriteAuthorName',
  numBooksPublished: 20,
  // test: number,
}

const favoriteLibrarian: Librarian = {
  assistCustomer: (customer: string) => console.log(customer),
  department: 'department',
  email: 'email',
  name: 'name'
}


let logDamage: DamageLogger;
logDamage = (reason: string) => console.log(`Damaged: ${reason}`);
logDamage(' -- test reason --');

logFirstAvailable(getAllBooks());

const jsBooksTitles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(jsBooksTitles);

const getBookByIndex = getBookAuthorByIndex(1);
console.log(getBookByIndex);

console.log(calcTotalPages());

jsBooksTitles.forEach((title: string) => console.log(title));

console.log(getBookById(1));

console.log(createCustomerID('John', 12));
const myId: string = createCustomerID('Test John', 12);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Mr Test', 77));

createCustomer('name');
createCustomer('Sasha, 25');
createCustomer('Alex', 33, 'Grodno');

getBookTitlesByCategory().forEach(title => console.log(title));
logFirstAvailable();

console.log(сheckoutBooks('Martin',1, 2, 4));

const checkedOutBooks = getTitles(false);
console.log(`checkedOutBooks: ${checkedOutBooks}`);

console.log(bookTitleTransform('test'));
// console.log(bookTitleTransform(16)); // throws the error

printBook(getBookByIdViaInterface(1));

const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,  
  markDamaged: (reason: string) => `Damaged: ${reason}`
} 
console.log(myBook.markDamaged('missing back cover'));
printBook(myBook);

// Task04.05
console.log(getBookProp(getAllBooks()[0], 'title'));
console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
  ]; 
  
  const result = purge<Book>(inventory);
  console.log(result);

  let result2 = purge([1,2,3,4,5]);
  console.log(result2);

  // Task 05.01
  abstract class ReferenceItem{
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

// const ref: ReferenceItem = new ReferenceItem('Some Updates', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'test';
// console.log(ref.publisher);

// Task 05.02

class Encyclopedia extends ReferenceItem {
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

const refBook: Encyclopedia = new Encyclopedia('Task 05.02: Encyclopedia:Title', 2020, 3);
console.log(refBook);
refBook.printItem();
refBook.printCitation();


// Task07.02

  const bookShelf: Shelf<Book> = new Shelf<Book>();
  inventory.forEach(book => bookShelf.add(book));

  const firstBook: Book = bookShelf.getFirst();
  console.log(firstBook);

  const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
  ];

  const magazineShelf: Shelf<Magazine> = new Shelf();
  magazines.forEach(mag => magazineShelf.add(mag));
  
  const firstMag = magazineShelf.getFirst();
  console.log(firstMag);

  // task07.03
  magazineShelf.printTitles();
  console.log(magazineShelf.find('five points'));

  //const magazineShelf1: Shelf<Person>


const bookR: BookRequiredFields = {
  author: 'Anna',
  available: false,
  category: Category.Angular,
  id: 1,
  markDamaged: null,
  pages: 3,
  title: 'test'
}

const updatedBook: UpdateBook = {
  id: 1,
  title: 'Unknown'
}

const paramsP: Parameters<CreateCustomerFunctionType> = ['test'];
createCustomer(...paramsP);

// end run

// start functions
function purge<T>(inventory: Array<T>): Array<T>{
  return inventory.slice(2);
}






function getBookProp(book: Book, property: BookProperties): any{
  if (typeof book[property] === 'function'){
    return (book[property] as Function).name;
  }
  return book[property];
}

function printBook(book: Book): void {
  console.log(`F_printBook: ${book.title} by ${book.author}`);
}

function getBookByIdViaInterface(id: number): Book | undefined {
  const books = getAllBooksViaInterface();
  return books.find(book => book.id === id);
}

function getAllBooksViaInterface(): ReadonlyArray<Book> {
  const  books: readonly Book[] = <const>
   [{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular}];
    return books;
}

function bookTitleTransform(title: any): string{
  assertStringValue(title);
  return [...title].reverse().join('');
}

function assertStringValue(val: any): asserts val is string{
  if (typeof val !== 'string'){
    throw new TypeError('value should have been a string');
  }
}
function doSomethingWithTitleVal(title: any): void {
  assertStringValue(title);
  title.toUpperCase();
}
function assertCondition(condition: any): asserts condition {
  if (!condition){
    throw new TypeError('value should be a string!');
  }
}
function doSomethingWithTitleCondition(title: any): void {
  assertCondition(typeof title === 'string');
  title.toUpperCase();
}


function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number[], available: boolean): string[];
function getTitles(...args: any): string[]{
  const books = getAllBooks();
  let foundTitles: string[];

  if(args.length == 1){
    const [arg] = args;

    if (typeof arg === 'string'){
      return books
        .filter(book => book.author === arg)
        .map(book => book.title);
    }else if (typeof arg === 'boolean'){
      return books
      .filter(book => book.available === arg)
      .map(book => book.title);
    }
  }else if (args.length == 2){
    const[id, available] = args;

    if(typeof id === 'number' && typeof available ==='boolean'){
      return books
      .filter(book => book.id === id && book.available === available)
      .map(book => book.title);
    }
  }

  return foundTitles;
}


function сheckoutBooks(customer: string, ...bookIDs: number[]): string[]{
  console.log(`F_сheckoutBooks: Customer: ${customer}`);
  const titles: string[] = [];

  for(const id of bookIDs){
    const book: any = getBookById(id);
    if (book && book.available) {
      titles.push(book.title);
    }
  }
  return titles;
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`F_createCustomer: Customer name: ${name}`);

  if (age){
    console.log(`F_createCustomer: Customer age: ${age}`);
  }

  if (city){
    console.log(`F_createCustomer: Customer city: ${city}`);
  }
}

function createCustomerID(name: string, id: number): string
{
  return `${id}-${name}`;
}

function getBookById(id: number): object{
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

function getAllBooks(): ReadonlyArray<any> {
  const books = <const>
   [{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular}];
    return books;    
}

function logFirstAvailable(books: readonly any[] = getAllBooks()): void{
  let booksCount = books.length;
  console.log(`Books count ${booksCount}`);

  let title = '';

  for(const book of books){ // as any[]
    if (book.available)
    {
      title = book.title;
      break;
    }
  }

  console.log(title);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string>{
  const books = getAllBooks();
  const titles: string[] = [];

  for(const book of books){ // as any[]
    if (book.category == category)
    {
      titles.push(book.title);
      // console.log(`getBookTitlesByCategory ${book.title}`);
    }
  }

  return titles;
}

function logBookTitles(titles: string[]): void {
  for(const title of titles)
  {
    console.log(title);
  }
}

function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const {title, author} = books[index];
  return [title, author];
}


function calcTotalPages(): bigint {
  const booksData = <const>
  [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
  { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
  { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

  const result: bigint = booksData.reduce((totalPages: bigint, bookData) => {
    return totalPages + BigInt(bookData.books) * BigInt(bookData.avgPagesPerBook)
  }, BigInt(0));

  return result;
  
}
// end functions
showHello('greeting', 'Lovely Typescript!');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// start enum
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

// end enum

// start interfaces

interface Book {
  id: number,
  title: string,
  author: string,
  available: boolean,
  category: Category,
  pages?: number,
  markDamaged?: (reason: string) => void
}

// end interfaces

// start run

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
// end run

// start functions
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
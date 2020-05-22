import { Book } from './interfaces';
import { Category } from './enums';
import { BookProperties, BookOrUndefined } from './types';

export  function getBookProp(book: Book, property: BookProperties): any{
    if (typeof book[property] === 'function'){
      return (book[property] as Function).name;
    }
    return book[property];
  }
  
 export  function printBook(book: Book): void {
    console.log(`F_printBook: ${book.title} by ${book.author}`);
  }
  
 export  function getBookByIdViaInterface(id: number): Book | undefined {
    const books = getAllBooksViaInterface();
    return books.find(book => book.id === id);
  }
  
 export  function getAllBooksViaInterface(): ReadonlyArray<Book> {
    const  books: readonly Book[] = <const>
     [{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
      { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
      { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
      { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular}];
      return books;
  }
  
 export  function bookTitleTransform(title: any): string{
    assertStringValue(title);
    return [...title].reverse().join('');
  }
  
 export  function assertStringValue(val: any): asserts val is string{
    if (typeof val !== 'string'){
      throw new TypeError('value should have been a string');
    }
  }
 export  function doSomethingWithTitleVal(title: any): void {
    assertStringValue(title);
    title.toUpperCase();
  }
 export  function assertCondition(condition: any): asserts condition {
    if (!condition){
      throw new TypeError('value should be a string!');
    }
  }
 export  function doSomethingWithTitleCondition(title: any): void {
    assertCondition(typeof title === 'string');
    title.toUpperCase();
  }
  
  
 export  function getTitles(author: string): string[];
 export  function getTitles(available: boolean): string[];
 export  function getTitles(id: number[], available: boolean): string[];
 export  function getTitles(...args: any): string[]{
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
  
  
 export  function сheckoutBooks(customer: string, ...bookIDs: number[]): string[]{
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
  
 export  function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`F_createCustomer: Customer name: ${name}`);
  
    if (age){
      console.log(`F_createCustomer: Customer age: ${age}`);
    }
  
    if (city){
      console.log(`F_createCustomer: Customer city: ${city}`);
    }
  }
  
 export  function createCustomerID(name: string, id: number): string
  {
    return `${id}-${name}`;
  }
  
 export  function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
  }
  
 export  function getAllBooks(): ReadonlyArray<any> {
    const books = <const>
     [{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
      { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
      { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
      { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular}];
      return books;    
  }
  
 export  function logFirstAvailable(books: readonly any[] = getAllBooks()): void{
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
  
 export  function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string>{
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
  
 export  function logBookTitles(titles: string[]): void {
    for(const title of titles)
    {
      console.log(title);
    }
  }
  
 export  function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
  }
  
  
 export  function calcTotalPages(): bigint {
    const booksData = <const>
    [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
  
    const result: bigint = booksData.reduce((totalPages: bigint, bookData) => {
      return totalPages + BigInt(bookData.books) * BigInt(bookData.avgPagesPerBook)
    }, BigInt(0));
  
    return result;    
  }
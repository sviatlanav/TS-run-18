import { UniversityLibrarian, ReferenceItem, Shelf } from './classes';
import { Book, Author, Logger, Librarian, ShelfItem, Magazine} from './interfaces';
import { Category } from './enums';
import { BookProperties, BookOrUndefined, PersonBook, CreateCustomerFunctionType, UpdateBook, BookRequiredFields } from './types';

import { getBookProp, printBook, logBookTitles, logFirstAvailable,
  getBookAuthorByIndex, getAllBooks, getBookTitlesByCategory, calcTotalPages,
  getBookById, createCustomerID, createCustomer, сheckoutBooks, getTitles,
  bookTitleTransform, getBookByIdViaInterface, purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromice, logSearchResults } from './functions';

import RefBook from './classes/encyclopedia';

showHello('greeting', 'Lovely Typescript!');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// start run
// console.log('start run');

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// }

// console.log(offer.magazine?.title);


// const favoriteAuthor: Author = {
//   email: 'favoriteAuthorEmail',
//   name: 'favoriteAuthorName',
//   numBooksPublished: 20,
//   // test: number,
// }

// const favoriteLibrarian: Librarian = {
//   assistCustomer: (customer: string) => console.log(customer),
//   department: 'department',
//   email: 'email',
//   name: 'name'
// }


// let logDamage: Logger;
// logDamage = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage(' -- test reason --');

// logFirstAvailable(getAllBooks());

// const jsBooksTitles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(jsBooksTitles);

// const getBookByIndex = getBookAuthorByIndex(1);
// console.log(getBookByIndex);

// console.log(calcTotalPages());

// jsBooksTitles.forEach((title: string) => console.log(title));

// console.log(getBookById(1));

// console.log(createCustomerID('John', 12));
// const myId: string = createCustomerID('Test John', 12);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Mr Test', 77));

// createCustomer('name');
// createCustomer('Sasha, 25');
// createCustomer('Alex', 33, 'Grodno');

// getBookTitlesByCategory().forEach(title => console.log(title));
// logFirstAvailable();

// console.log(сheckoutBooks('Martin',1, 2, 4));

// const checkedOutBooks = getTitles(false);
// console.log(`checkedOutBooks: ${checkedOutBooks}`);

// console.log(bookTitleTransform('test'));
// // console.log(bookTitleTransform(16)); // throws the error

// printBook(getBookByIdViaInterface(1));

// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,  
//   markDamaged: (reason: string) => `Damaged: ${reason}`
// } 
// console.log(myBook.markDamaged('missing back cover'));
// printBook(myBook);

// // Task04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// // console.log(getBookProp(getAllBooks()[0], 'isbn'));
  
// // const ref: ReferenceItem = new ReferenceItem('Some Updates', 2020);
// // console.log(ref);
// // ref.printItem();
// // ref.publisher = 'test';
// // console.log(ref.publisher);

// // Task 05.02

// const refBook: RefBook = new RefBook('Task 05.02: Encyclopedia:Title', 2020, 3);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();


// // Task05.04. 
// const universityLibrarian: Librarian = new UniversityLibrarian();
// universityLibrarian.name = 'LibrarianName';
// universityLibrarian.assistCustomer('LibrarianCustomer');

// // Task 05.05

// const personBook: PersonBook = {
//   author: 'Auth',
//   available: true,
//   category: Category.Angular,
//   email: 'email',
//   id: 11,
//   name: 'name',
//   title: 'title',
//   markDamaged: null,
//   pages: 3
// }
// console.log(personBook);

// // Task 06.05

// import('./classes').then(module => { 
//   const reader = new module.Reader();
//   reader.name = 'Anna';
//   console.log(reader);
// });

// // Task 07.01
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//   ]; 
  
//   const result = purge<Book>(inventory);
//   console.log(result);

//   let result2 = purge([1,2,3,4,5]);
//   console.log(result2);

// // Task07.02
//   const bookShelf: Shelf<Book> = new Shelf<Book>();
//   inventory.forEach(book => bookShelf.add(book));

//   const firstBook: Book = bookShelf.getFirst();
//   console.log(firstBook);

//   const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
//   ];

//   const magazineShelf: Shelf<Magazine> = new Shelf();
//   magazines.forEach(mag => magazineShelf.add(mag));
  
//   const firstMag = magazineShelf.getFirst();
//   console.log(firstMag);

//   // Task07.03
//   magazineShelf.printTitles();
//   console.log(magazineShelf.find('five points'));

//   //const magazineShelf1: Shelf<Person>

//  // Task07.04

// const bookR: BookRequiredFields = {
//   author: 'Anna',
//   available: false,
//   category: Category.Angular,
//   id: 1,
//   markDamaged: null,
//   pages: 3,
//   title: 'test'
// }

// const updatedBook: UpdateBook = {
//   id: 1,
//   title: 'Unknown'
// }

// const paramsP: Parameters<CreateCustomerFunctionType> = ['test'];
// createCustomer(...paramsP);

// T08.01
// const universityLibrarianD = new UniversityLibrarian();
// console.log(`T08.01 `);
// console.log(universityLibrarianD);

// T08.02
// const fLibrarian = new UniversityLibrarian();
// 
// fLibrarian.name = 'TestName';
// fLibrarian['printLibrarian']();
// console.log('<T08.02');

// T08.03
// const iLibrarian = new UniversityLibrarian();
// iLibrarian.assistFaculty = null;
// iLibrarian.teachCommunity = null;

// T08.04
// const refBookT: RefBook = new RefBook('Title', 2020, 3);
// console.log('T08.04>');
// refBookT.printItem();
// console.log('<T08.04');

// T08.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'TestName';
// fLibrarian.assistCustomer('Boris');
// console.log(fLibrarian);

// T08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'TestName';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('Boris');

// T08.07
// const refBookT: RefBook = new RefBook('Title', 2020, 3);
// console.log('T08.07>');
// refBookT.copies = 10;
// refBookT.printItem();
// console.log(refBookT);


// T09.01
// console.log('Start');

// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// T09.02
// console.log('Start');

// getBooksByCategoryPromice(Category.JavaScript)
//   .then(data => { 
//     console.log(data);
//     return data.length })
//   .then(numberOfBooks => console.log(numberOfBooks))
//   .catch(console.log);
// getBooksByCategoryPromice(Category.Software)
//   .then(console.log)
//   .catch(console.log);

// console.log('End');

// T09.03

// console.log('Start');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(console.log);
// console.log('End');


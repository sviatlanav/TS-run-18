showHello('greeting', 'Lovely Typescript!');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// start enum
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

// end enum

// start run

logFirstAvailable(getAllBooks());

const jsBooksTitles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(jsBooksTitles);

const getBookByIndex = getBookAuthorByIndex(1);
console.log(getBookByIndex);

console.log(calcTotalPages());

// end run



// start functions

function getAllBooks(): ReadonlyArray<any> {
  const books = <const>
   [{ title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
    { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular}];
    return books;    
}

function logFirstAvailable(books: readonly any[]): void{
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

function getBookTitlesByCategory(category: Category): Array<string>{
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
import { Book, Person, Author } from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdateBook = Partial<Book>;
export type AuthorWhoEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

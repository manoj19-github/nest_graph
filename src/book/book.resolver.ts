import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { BookService } from './book.service';
import { BookDocument } from './book.schema';
import { AddNewBookArgs } from './args/addBook.input';
import { ValidationPipe } from '@nestjs/common';
@Resolver((of) => BookDocument)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [BookDocument], { name: 'books' })
  getAllBook() {
    return this.bookService.findAllBooks();
  }
  @Mutation((returns) => BookDocument, { name: 'addBook' })
  addNewBook(
    @Args('addBookArgs', new ValidationPipe()) addBookArgs: AddNewBookArgs,
  ) {
    return this.bookService.addBook(addBookArgs);
  }
}

import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  books = [
    {
      id: 2,
      title: 'react',
      price: 345,
    },
  ];

  @Query('books')
  getAllBook() {
    return this.books;
  }
}

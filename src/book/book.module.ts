import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';

@Module({
  imports: [BookResolver],
})
export class BookModule {}

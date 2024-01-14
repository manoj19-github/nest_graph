import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModel, BookSchama } from './book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BookSchama.name, schema: BookModel }]),
  ],
  controllers: [],
  providers: [BookResolver, BookService],
})
export class BookModule {}

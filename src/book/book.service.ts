import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookSchama, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { BookModel } from './book.schema';
import { AddNewBookArgs } from './args/addBook.input';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(BookSchama.name) private bookModel: Model<BookDocument>,
  ) {}
  async findAllBooks(){
    return await this.bookModel.find();
  }
  async addBook(newBookData: AddNewBookArgs){
    const newBook = await this.bookModel.create(newBookData)
    return newBook;

  }
}

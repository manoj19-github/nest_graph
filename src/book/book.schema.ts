import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class BookSchama {
  @Prop()
  title: string;
  @Prop()
  published: string;
  @Prop()
  price: number;
  @Prop()
  author: string;
}

@ObjectType()
export class BookDocument extends Document {
  @Field()
  title: string;
  @Field()
  published: string;
  @Field(() => Int)
  price: number;
  @Field()
  author: string;
}

export const BookModel = SchemaFactory.createForClass(BookSchama)
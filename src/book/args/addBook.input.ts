import {
  IsNumber,
  IsPositive,
  IsString,
  Length,
  Max,
} from '@nestjs/class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddNewBookArgs {
  @Field()
  @IsString()
  @Length(5, 20)
  title: string;
  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @Max(10000)
  price: number;
  @Field()
  @IsString()
  @Length(5, 20)
  author: string;
  @Field()
  @IsString()
  @Length(4, 4)
  published: string;
}

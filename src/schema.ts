
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddNewBookArgs {
    title: string;
    price: number;
    author: string;
    published: string;
}

export interface BookDocument {
    title: string;
    published: string;
    price: number;
    author: string;
}

export interface IQuery {
    books(): BookDocument[] | Promise<BookDocument[]>;
}

export interface IMutation {
    addBook(addBookArgs: AddNewBookArgs): BookDocument | Promise<BookDocument>;
}

type Nullable<T> = T | null;

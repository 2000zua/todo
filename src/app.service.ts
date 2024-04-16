import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { json } from 'stream/consumers';

@Resolver()
export class AppService {

  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }

}

import { Controller, Get, Query, Post, Body, Response, Render, Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

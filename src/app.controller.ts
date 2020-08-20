import { Controller, Get, Render, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHomeView() : any {
    return {
      name: '张三',
      age: '20'
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('robot')
  postData() : any {
    return {
      text: 'hello im a robot'
    }
  }

}

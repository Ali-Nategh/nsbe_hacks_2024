import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postProductInformation(@Body() trainingData: any): Promise<string> {
    console.log(trainingData);
    trainingData = JSON.stringify(trainingData);
    return await this.appService.postProductInformation(trainingData);
  }
}

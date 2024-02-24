import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  postProductInformation(): string {
    return 'Hello World!';
  }
}

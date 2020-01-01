import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): string {
    return res.sendFile("index.html", { root: join(__dirname, '../..', 'client/dist') });
    // return this.appService.getHello();
  }
}

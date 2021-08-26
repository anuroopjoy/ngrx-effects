import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getCategories')
  getCategories(): { name: string }[] {
    return this.appService.getCategories();
  }

  @Get('getMovies')
  getMovies(): { name: string }[] {
    return this.appService.getMovies();
  }
}

import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}
  
  @Get('all')
  findAll() {
    return this.dataService.findAll();
  }

  @Get('insert')
  insertData(): Promise<string> {
    return this.dataService.insertData();
  }
}

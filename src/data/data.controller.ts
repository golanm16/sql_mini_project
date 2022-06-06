import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post('run')
  async runScript(@Body() { script }: { script: string }) {
    console.log('runn');

    return await this.dataService.runScript(script);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { parse } from 'csv-parse/.';
import { DataSource, Repository } from 'typeorm';
import { insertData } from './data.insertor';
import { Activity } from './entities/Activity';

@Injectable()
export class DataService {
  constructor(
    @Inject('ACTIVITY_REPOSITORY')
    private activityRepo: Repository<Activity>,
    @Inject('MAIN_DATA_SOURCE')
    private ds: DataSource,
  ) {}

  async findAll(): Promise<Activity[]> {
    return this.activityRepo.find();
  }
  async runScript(script: string): Promise<Activity[]> {
    // const connection = await this.ds.initialize();
    return this.ds.query(script);
  }

  async insertData(): Promise<string> {
    await insertData(this.ds);
    return 'working';
  }
}

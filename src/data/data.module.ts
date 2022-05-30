import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { Activity } from './entities/Activity';
import { DatabaseModule } from 'src/database/database.module';
import { dataProviders } from './data.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DataController],
  providers: [DataService, ...dataProviders],
})
export class DataModule {}

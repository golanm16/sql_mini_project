import { DataSource } from 'typeorm';
import { Activity } from './entities/Activity';
import { ActivityConductor } from './entities/ActivityConductor';
// import { ActivityWorker } from './entities/ActivityWorker';
import { CashPayment } from './entities/CashPayment';
import { ClubMember } from './entities/ClubMember';
import { Consume } from './entities/Consume';
import { CreditPayment } from './entities/CreditPayment';
import { Customer } from './entities/Customer';
import { Payment } from './entities/Payment';
import { Renter } from './entities/Renter';
import { Villa } from './entities/Villa';
import { Worker } from './entities/Worker';

export const dataProviders = [
  {
    provide: 'MAIN_DATA_SOURCE',
    useFactory: (dataSource: DataSource) => dataSource,
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ACTIVITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Activity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ACTIVITY_CONDUCTOR_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ActivityConductor),
    inject: ['DATA_SOURCE'],
  },
  // {
  //   provide: 'ACTIVITY_WORKER_REPOSITORY',
  //   useFactory: (dataSource: DataSource) =>
  //     dataSource.getRepository(ActivityWorker),
  //   inject: ['DATA_SOURCE'],
  // },
  {
    provide: 'CASH_PAYMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CashPayment),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CLUB_MEMBER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClubMember),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CONSUME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Consume),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CREDIT_PAYMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CreditPayment),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CUSTOMER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Customer),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PAYMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Payment),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'RENTER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Renter),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'VILLA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Villa),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'WORKER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Worker),
    inject: ['DATA_SOURCE'],
  },
];

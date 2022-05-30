import { Type } from '@nestjs/common';
import { parse } from 'csv-parse';
import * as fs from 'fs';
import { DataSource, Repository } from 'typeorm';
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

const fakeDataPath = 'public/assets/fake_data/';
export const insertRow = (data: any, columns: any[]) => {};

const processFile = async (
  filePath: string,
  insertRow: (row: any) => void,
  columns: string[],
) => {
  const records = [];
  const parser = fs.createReadStream(filePath).pipe(
    parse({
      from_line: 2,
      columns,
    }),
  );
  for await (let record of parser) {
    // Work with each record
    Object.entries(record).forEach(([key, val]) => {
      if (typeof val === 'string' && val.includes('/')) {
        const dateArr = val.split('/').map((v) => parseInt(v));
        if (dateArr.length === 3) {
          record[key] = new Date(dateArr[2], dateArr[1], dateArr[0]);
          // console.log(val);
        }
      }
    });
    if (typeof record === 'string' && record.includes('/')) {
      const dateArr = record.split('/').map((v) => parseInt(v));
      if (dateArr.length === 3) {
        record = new Date(dateArr[2], dateArr[1], dateArr[0]);
        console.log(record);
        break;
      }
    }
    records.push(record);
    try {
      await insertRow(record);
    } catch (err) {
      console.log('error inserting row: ', err);
    }
    // console.log(record);
  }
  return records;
};

const insertor = async (
  ds: DataSource,
  type: Type,
  columns: string[],
  fileName: string,
) => {
  console.log('inserting ' + type);

  await processFile(
    `${fakeDataPath}${fileName}.csv`,
    async (row: any) => {
      await ds.getRepository(type).insert(row);
    },
    columns,
  );
};

export const insertData = async (ds: DataSource) => {
  await insertor(
    ds,
    Activity,
    ['id', 'category', 'season', 'title'],
    'activity',
  );
  await insertor(
    ds,
    ActivityConductor,
    ['workerId', 'activityId'],
    'activityWorker',
  );
  await insertor(ds, CashPayment, ['paymentId'], 'cashPayment');
  await insertor(
    ds,
    ClubMember,
    ['customerId', 'points', 'joinDate'],
    'clubMembers',
  );
  await insertor(
    ds,
    Consume,
    ['activityId', 'customerId', 'canceled'],
    'cunsom whitout paymentId',
  );
  await insertor(
    ds,
    CreditPayment,
    ['numberOfPayments', 'paymentId'],
    'PaymentByCredit',
  );
  await insertor(
    ds,
    Customer,
    [
      'id',
      'fName',
      'lName',
      'email',
      'gender',
      'address',
      'phone',
      'birthDate',
    ],
    'customer',
  );
  await insertor(
    ds,
    Payment,
    ['id', 'customerId', 'amount', 'dutyDate', 'paymentDate'],
    'payment',
  );
  await insertor(
    ds,
    Renter,
    ['customerId', 'villaId', 'startDate', 'finalDate'],
    'renter',
  );
  await insertor(ds, Villa, ['id', 'numOfRooms', 'pricePerNight'], 'villa');
  await insertor(
    ds,
    Worker,
    ['id', 'fName', 'lName', 'rating', 'salary'],
    'workers',
  );
};

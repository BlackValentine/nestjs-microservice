import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber } from './subscriber.model';
import { ObjectID } from 'mongodb';

@Injectable()
export class SubscriberRepository {
  constructor(
    @InjectModel('Subscriber')
    private readonly subscriber: Model<Subscriber>,
  ) {}

  async create(doc): Promise<any> {
    doc._id = new ObjectID();
    return await new this.subscriber(doc).save();
  }

  async getAll() {
    console.log(this.subscriber.find());
    return this.subscriber.find();
  }
}

import { Injectable } from '@nestjs/common';
import { SubscriberRepository } from 'src/subscriber/subscriber.repository';
import { CreateSubscriberDto } from './subscriber.dto';

@Injectable()
export class SubscriberService {
  constructor(private readonly subscriverRepository: SubscriberRepository) {}

  async addSubscriber(createSubscriberDto: CreateSubscriberDto) {
    return await this.subscriverRepository.create(createSubscriberDto);
  }

  async getAllSubscriber() {
    return this.subscriverRepository.getAll();
  }
}

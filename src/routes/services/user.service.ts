import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit{
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
    console.log('✅ Gateway conectado al UserService via NATS');
  }

  getUser(userId: number) {
    return firstValueFrom(this.client.send('user.find', userId));
  }
}


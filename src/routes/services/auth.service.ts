import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
    console.log('✅ Gateway conectado al AuthService via NATS');
  }
  
  login(data: { username: string; password: string }) {
    return firstValueFrom(this.client.send('auth.login', data));
  }
}


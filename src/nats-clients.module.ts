import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env } from './config/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.NATS,
        options: { servers: [env.natsUrl] },
      },
      {
        name: 'USER_SERVICE',
        transport: Transport.NATS,
        options: { servers: [env.natsUrl] },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class NatsClientsModule {}

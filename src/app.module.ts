import { Module } from '@nestjs/common';
import { RoutesModule } from './routes/routes.module';
import { NatsClientsModule } from './nats-clients.module';

@Module({
  imports: [NatsClientsModule, RoutesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

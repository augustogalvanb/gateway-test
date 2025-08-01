import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { NatsClientsModule } from 'src/nats-clients.module';

@Module({
  imports: [NatsClientsModule],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class RoutesModule {}
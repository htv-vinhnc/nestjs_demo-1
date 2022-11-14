import { NestFactory } from '@nestjs/core';
import { Repository } from 'typeorm';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/guards/auth/auth.guard';
import { User } from './users/user.entity';
import { UserService } from './users/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();

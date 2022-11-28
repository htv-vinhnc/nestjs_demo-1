import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { DBconfig } from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(DBconfig),
UserModule,
AuthModule,
],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}

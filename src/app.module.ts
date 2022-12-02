import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const options = await getConnectionOptions();
        return {
          ...options,
        } as TypeOrmModuleOptions;
      },
    }),
UsersModule,
AuthModule,
],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
})
export class AppModule {}

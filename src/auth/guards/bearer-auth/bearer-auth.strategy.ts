// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';

// @Injectable()
// export class BearerAuthStrategy extends PassportStrategy(Strategy) {
//   constructor(private configService: ConfigService) {
//     super();
//   }

//   public async validate(apiKey: string) {
//     if (this.configService.get<string>('API_KEY') === apiKey) {
//       return {};
//     }
//   }
// }

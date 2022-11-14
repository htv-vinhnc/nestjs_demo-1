import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../../../users/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(@Inject()private readonly userService: UserService){}
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest(); 
      return this.validateRequest(request.body);
    }

    async validateRequest(requestBody: any): Promise<boolean>{
        const user = await this.userService.getUserByEmail(requestBody.username)
        if (!user) return false;
        return true;
      }
}
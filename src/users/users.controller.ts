import { Controller, Get } from '@nestjs/common';

@Controller('/user')
export class UsersController {
  @Get('/id')
  getfindbyID() {
    return 'ID de usuario';
  }
}

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [UserModule],
  // imports: [CatModule],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';

@Module({
  controllers: [CatsController],
})
export class CatModule {}

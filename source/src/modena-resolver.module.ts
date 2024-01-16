import { Module } from '@nestjs/common';
import { AppController } from './modena-resolver.controller';
import { AppService } from './modena-resolver.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

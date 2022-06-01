import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CatsModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

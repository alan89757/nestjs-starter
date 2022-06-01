import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // 导入模块的列表
  controllers: [AppController], // 控制器
  providers: [AppService], // 服务注入
  exports: [], // 本模块提供可用模块子集
})
export class AppModule {}

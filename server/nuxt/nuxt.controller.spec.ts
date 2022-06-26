import { Test, TestingModule } from '@nestjs/testing';
import { NuxtController } from './nuxt.controller';

describe('NuxtController', () => {
  let controller: NuxtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NuxtController],
    }).compile();

    controller = module.get<NuxtController>(NuxtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NuxtService } from './nuxt.service';

describe('NuxtService', () => {
  let service: NuxtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NuxtService],
    }).compile();

    service = module.get<NuxtService>(NuxtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

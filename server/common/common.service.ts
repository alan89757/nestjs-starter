import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getCommon() {
    return 'get common service';
  }
}

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema, BooleanSchema, StringSchema, Schema } from 'joi';
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("JoiValidationPipe", value)
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('表单数据填写有误，请重新提交');
    }
    return value;
  }
}
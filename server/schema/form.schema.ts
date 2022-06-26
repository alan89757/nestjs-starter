import { object, required } from 'joi';

export default object({
  name: required(),
  age: required()
})

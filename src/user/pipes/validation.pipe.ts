import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CostomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string' && value.length > 10) {
      //any logic here
    }
    // console.log("Costom validation pipe: " + value)
    return 'DEV' + value;
  }
}
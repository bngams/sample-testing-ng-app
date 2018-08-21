import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moderation'
})
export class ModerationPipe implements PipeTransform {

  transform(value: string, level?: string): any {
    switch (level) {
      case 'LOW':
        return this.replaceLow(value);
      case 'STRICT':
        return this.replaceStrict(value);
      default:
        return this.replaceLow(value);
    }
  }

  replaceLow(value) {
    return value.replace('FUCK', '***');
  }

  replaceStrict(value) {
    value = this.replaceLow(value);
    value.replace('SHIT', '***');
    return value.replace('!', '*');
  }

}

export class ErrorField {
  readonly field: string;
  readonly value: string;
  readonly reason: string;

  constructor(field: string, value: string = '', reason: string) {
    this.field = field;
    this.value = field.substr(0, 2) === 'pw' ? 'secret' : value;
    this.reason = reason;
  }
}

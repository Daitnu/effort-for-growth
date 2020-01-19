export class ErrorField {
  private readonly field: string;
  private readonly value: string;
  private readonly reason: string;

  constructor(field: string, value: string = "", reason: string) {
    this.field = field;
    this.value = field.substr(0, 2) === "pw" ? "secret" : value;
    this.reason = reason;
  }
}

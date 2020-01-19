import { ErrorCode } from "./error-code";
import { ErrorField } from "./errror-field";

export class ErrorResponse {
  private readonly errorCode: ErrorCode;
  private readonly fieldErrors: ErrorField[];

  constructor(
    errorCode: ErrorCode,
    fieldErrors: ErrorField | ErrorField[] = []
  ) {
    this.errorCode = errorCode;
    this.fieldErrors = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
  }

  getErrorCode(): ErrorCode {
    return this.errorCode;
  }

  getErrorFields(): ErrorField[] {
    return this.fieldErrors;
  }
}

class HTTPResponse {
  private readonly isError: boolean;
  private readonly data: object;

  constructor(isError, data) {
    this.isError = isError;
    this.data = data;
  }

  getIsError(): boolean {
    return this.isError;
  }

  getData(): object {
    return this.data;
  }
}
export default HTTPResponse;

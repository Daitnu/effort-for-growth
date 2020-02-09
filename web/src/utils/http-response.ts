class HTTPResponse {
  constructor(private readonly isError: boolean, private readonly data: object) {}

  getIsError(): boolean {
    return this.isError;
  }

  getData(): object | null {
    return this.data;
  }
}
export default HTTPResponse;
